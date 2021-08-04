---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "02:API"
title: "Categories"
weight: 2
---

## Categories

Endpoint URLs are prefixed with the `forum.router.prefix` config value (`/forum/api` by default).

### Index

```
GET /category
```

Returns a flat collection of categories (including their nested set properties).

### Fetch

```
GET /category/{id}
```

Returns a specified category.

### Store

```
POST /category
```

Creates a category with the given attributes. Valid attributes are:

| Name             | Type               | Description             | Default                                      |
|------------------|--------------------|-------------------------|----------------------------------------------|
| `title`          | String (required)  | Title                   | *N/A*                                        |
| `description`    | String             | Description             | `null`                                       |
| `color`          | String             | Accent color            | `config('forum.web.default_category_color')` |
| `enable_threads` | Boolean            | Enable/disable threads  | `false`                                      |
| `is_private`     | Boolean            | Make private or public  | `false`                                      |

Returns the created category if successful.

### Update

```
PATCH /category/{id}
```

Updates a category with the given attributes. See **Store** endpoint above for valid attributes.

Returns the updated category if successful.

### Delete

```
DELETE /category/{id}
```

Deletes a category. The deletion is soft by default if the soft-deletion feature is enabled. Include `force: true` in the request body to hard-delete the category.

Returns a "success" response if successful.

### Thread index

```
GET /category/{id}/thread
```

Returns a paginated collection of threads belonging to the specified category.

### Store thread

```
POST /category/{id}/thread
```

Creates a new thread in the specified category. Valid attributes are:

| Name             | Type               | Description             | Default                                      |
|------------------|--------------------|-------------------------|----------------------------------------------|
| `title`          | String (required)  | Thread title            | *N/A*                                        |
| `content`        | String (required)  | Post content            | *N/A*                                        |

Returns the created post if successful.

### Bulk manage

```
POST /bulk/category/manage
```

Bulk updates categories, including their hierarchy, based on the order and nesting of category data in the request body. Uses the [rebuild tree method of kalnoy/nestedset](https://github.com/lazychaser/laravel-nestedset#rebuilding-a-tree-from-array).

Example payload:

```
{
  "categories": [
    {
      "id": 1,
      "title": "New title",
      "children": [
        {
          "id": 2
        }
      ]
    }
  ]
}
```

Returns a "success" response if successful.