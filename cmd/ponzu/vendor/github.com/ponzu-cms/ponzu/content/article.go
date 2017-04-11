package content

import (
	"fmt"

	"github.com/ponzu-cms/ponzu/management/editor"
	"github.com/ponzu-cms/ponzu/system/item"
)

type Article struct {
	item.Item

	Title string   `json:"title"`
	Body  string   `json:"body"`
	Tags  []string `json:"tags"`
}

// MarshalEditor writes a buffer of html to edit a Article within the CMS
// and implements editor.Editable
func (a *Article) MarshalEditor() ([]byte, error) {
	view, err := editor.Form(a,
		// Take note that the first argument to these Input-like functions
		// is the string version of each Article field, and must follow
		// this pattern for auto-decoding and auto-encoding reasons:
		editor.Field{
			View: editor.Input("Title", a, map[string]string{
				"label":       "Title",
				"type":        "text",
				"placeholder": "Enter the Title here",
			}),
		},
		editor.Field{
			View: editor.Richtext("Body", a, map[string]string{
				"label":       "Body",
				"placeholder": "Enter the Body here",
			}),
		},
		editor.Field{
			View: editor.Tags("Tags", a, map[string]string{
				"label":       "Tags",
				"placeholder": "+Tags",
			}),
		},
	)

	if err != nil {
		return nil, fmt.Errorf("Failed to render Article editor view: %s", err.Error())
	}

	return view, nil
}

func init() {
	item.Types["Article"] = func() interface{} { return new(Article) }
}
