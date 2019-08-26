---
layout: "docs"
projects: "Laravel Forum"
versions: "3.x"
topics: "03:API"
title: "Request Scopes"
weight: 6
---

## Request Scopes

Request scopes take advantage of regular [Eloquent Query Scopes](http://laravel.com/docs/5.1/eloquent#query-scopes) to provide an easy way of adjusting API requests.

Refer to the [front-end source](https://github.com/Riari/laravel-forum-frontend) for examples of these scopes being implemented programmatically.

### Where

```
GET <endpoint>?where[column]=value
```

Add a simple [WHERE clause](http://laravel.com/docs/5.1/queries#where-clauses) to the query.

### With

```
GET <endpoint>?with[]=relationship
```

Include the specified relationship(s) in the response. Useful for [Eager Loading](http://laravel.com/docs/5.1/eloquent-relationships#eager-loading).

### Append

```
GET <endpoint>?append[]=attribute
```

Include the specified attribute(s) in the response.

### Order

```
GET <endpoint>?orderBy=column&orderDir=desc
```

Add a simple [ORDER BY](http://laravel.com/docs/5.1/queries#ordering-grouping-limit-and-offset) to the query.
