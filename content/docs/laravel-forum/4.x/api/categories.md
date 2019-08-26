---
layout: "docs"
projects: "Laravel Forum"
versions: "4.x"
topics: "03:API"
title: "Categories"
weight: 3
---

## Categories

### Index

```
GET <root>/api/category
```

Returns a collection of categories, optionally narrowed down by [request scopes](docs/laravel-forum/4.x/api.request-scopes.md).

### Store

```
POST <root>/api/category
```

Creates a category with the given attributes. Valid attributes are:

| Name             | Type               | Description             | Default |
|------------------|--------------------|-------------------------|---------|
| `category_id`    | Integer            | Parent category ID      | 0       |
| `title`          | String (required)  | Category title          | *N/A*   |
| `description`    | String             | Category description    | *N/A*   |
| `weight`         | Integer (required) | Category listing weight | *N/A*   |
| `enable_threads` | Boolean (required) | Enable/disable threads  | *N/A*   |
| `private`        | Boolean (required) | Make private or public  | *N/A*   |

### Fetch

```
GET <root>/api/category/<id>
```

Returns a specified category.

### Delete

```
DELETE <root>/api/category/<id>
```

Deletes a specified category.

### Enable Threads

```
PATCH <root>/api/category/<id>/enable-threads
```

Enables threads on a specified category (if applicable).

### Disable Threads

```
PATCH <root>/api/category/<id>/disable-threads
```

Disables threads on a specified category (if applicable).

### Make Public

```
PATCH <root>/api/category/<id>/make-public
```

Makes the specified category public.

### Make Private

```
PATCH <root>/api/category/<id>/make-private
```

Makes the specified category private.

### Move

```
PATCH <root>/api/category/<id>/move
```

Gives the specified category a new `category_id` (if applicable).

### Rename

```
PATCH <root>/api/category/<id>/rename
```

Gives the specified category a new `title`.

### Reorder

```
PATCH <root>/api/category/<id>/reorder
```

Gives the specified category a new `weight`.
