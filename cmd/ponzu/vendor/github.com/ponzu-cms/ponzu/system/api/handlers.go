package api

import (
	"encoding/json"
	"errors"
	"log"
	"net/http"
	"strconv"
	"strings"

	"github.com/ponzu-cms/ponzu/system/db"
	"github.com/ponzu-cms/ponzu/system/item"
)

// ErrNoAuth should be used to report failed auth requests
var ErrNoAuth = errors.New("Auth failed for request")

// deprecating from API, but going to provide code here in case someone wants it
func typesHandler(res http.ResponseWriter, req *http.Request) {
	var types = []string{}
	for t, fn := range item.Types {
		if !hide(fn(), res, req) {
			types = append(types, t)
		}
	}

	j, err := toJSON(types)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
		return
	}

	sendData(res, req, j)
}

func contentsHandler(res http.ResponseWriter, req *http.Request) {
	q := req.URL.Query()
	t := q.Get("type")
	if t == "" {
		res.WriteHeader(http.StatusBadRequest)
		return
	}

	it, ok := item.Types[t]
	if !ok {
		res.WriteHeader(http.StatusNotFound)
		return
	}

	if hide(it(), res, req) {
		return
	}

	count, err := strconv.Atoi(q.Get("count")) // int: determines number of posts to return (10 default, -1 is all)
	if err != nil {
		if q.Get("count") == "" {
			count = 10
		} else {
			res.WriteHeader(http.StatusInternalServerError)
			return
		}
	}

	offset, err := strconv.Atoi(q.Get("offset")) // int: multiplier of count for pagination (0 default)
	if err != nil {
		if q.Get("offset") == "" {
			offset = 0
		} else {
			res.WriteHeader(http.StatusInternalServerError)
			return
		}
	}

	order := strings.ToLower(q.Get("order")) // string: sort order of posts by timestamp ASC / DESC (DESC default)
	if order != "asc" {
		order = "desc"
	}

	opts := db.QueryOptions{
		Count:  count,
		Offset: offset,
		Order:  order,
	}

	_, bb := db.Query(t+"__sorted", opts)
	var result = []json.RawMessage{}
	for i := range bb {
		result = append(result, bb[i])
	}

	j, err := fmtJSON(result...)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
		return
	}

	j, err = omit(it(), j)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
		return
	}

	sendData(res, req, j)
}

func contentHandler(res http.ResponseWriter, req *http.Request) {
	q := req.URL.Query()
	id := q.Get("id")
	t := q.Get("type")
	slug := q.Get("slug")

	if slug != "" {
		contentHandlerBySlug(res, req)
		return
	}

	if t == "" || id == "" {
		res.WriteHeader(http.StatusBadRequest)
		return
	}

	pt, ok := item.Types[t]
	if !ok {
		res.WriteHeader(http.StatusNotFound)
		return
	}

	if hide(pt(), res, req) {
		return
	}

	post, err := db.Content(t + ":" + id)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
		return
	}

	push(res, req, pt, post)

	j, err := fmtJSON(json.RawMessage(post))
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
		return
	}

	j, err = omit(pt(), j)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
		return
	}

	sendData(res, req, j)
}

func contentHandlerBySlug(res http.ResponseWriter, req *http.Request) {
	slug := req.URL.Query().Get("slug")

	if slug == "" {
		res.WriteHeader(http.StatusBadRequest)
		return
	}

	// lookup type:id by slug key in __contentIndex
	t, post, err := db.ContentBySlug(slug)
	if err != nil {
		log.Println("Error finding content by slug:", slug, err)
		res.WriteHeader(http.StatusInternalServerError)
		return
	}

	it, ok := item.Types[t]
	if !ok {
		res.WriteHeader(http.StatusBadRequest)
		return
	}

	if hide(it(), res, req) {
		return
	}

	push(res, req, it, post)

	j, err := fmtJSON(json.RawMessage(post))
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
		return
	}

	j, err = omit(it(), j)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
		return
	}

	sendData(res, req, j)
}
