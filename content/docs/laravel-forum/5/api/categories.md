---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "02:API"
title: "Categories"
weight: 2
---

## Categories

Endpoint paths are prefixed with the `forum.router.prefix` config value (`/forum/api` by default).

{{< api-endpoint 
    name="Index"
    method="GET"
    path="/category"
    returns="a flat collection of categories (including their nested set properties)." >}}

{{< api-endpoint 
    name="Fetch"
    method="GET"
    path="/category/{id:int}"
    returns="the category specified by `{id}` if found and accessible, otherwise a 404 error." >}}

{{< api-endpoint 
    name="Store"
    method="POST"
    path="/category"
    description="Creates a category with the specified parameters (see list below)."
    returns="the created category object if successful." >}}

#### Parameters

| Name             | Type               | Description             | Default                                      |
|------------------|--------------------|-------------------------|----------------------------------------------|
| `title`          | String (required)  | Title                   | *N/A*                                        |
| `description`    | String             | Description             | `null`                                       |
| `color`          | String             | Accent color            | `config('forum.web.default_category_color')` |
| `enable_threads` | Boolean            | Enable/disable threads  | `false`                                      |
| `is_private`     | Boolean            | Make private or public  | `false`                                      |

{{< api-endpoint 
    name="Update"
    method="PATCH"
    path="/category/{id:int}"
    description="Updates a category with the specified parameters (see list below)."
    returns="the updated category object if successful." >}}

#### Parameters

| Name             | Type               | Description             |
|------------------|--------------------|-------------------------|
| `title`          | String             | Title                   |
| `description`    | String             | Description             |
| `color`          | String             | Accent color            |
| `enable_threads` | Boolean            | Enable/disable threads  |
| `is_private`     | Boolean            | Make private or public  |

{{< api-endpoint 
    name="Delete"
    method="DELETE"
    path="/category/{id:int}"
    description="Deletes a category. The deletion is soft by default if the soft-deletion feature is enabled. Include `force: true` in the request body to hard-delete the category."
    returns="the created category object if successful." >}}

{{< api-endpoint 
    name="Thread index"
    method="GET"
    path="/category/{id:int}/thread"
    returns="a paginated collection of threads belonging to the specified category." >}}

{{< api-endpoint 
    name="Store thread"
    method="POST"
    path="/category/{id:int}/thread"
    description="Creates a new thread in the category specified by `{id}` with the specified parameters (see list below)."
    returns="the created post if successful." >}}

#### Parameters

| Name             | Type               | Description             |
|------------------|--------------------|-------------------------|
| `title`          | String (required)  | Thread title            |
| `content`        | String (required)  | Post content            |

{{< api-endpoint 
    name="Bulk manage"
    method="POST"
    path="/bulk/category/manage"
    description="Bulk updates categories, including their hierarchy, based on the order and nesting of category data in the request body. Uses the [rebuild tree method of kalnoy/nestedset](https://github.com/lazychaser/laravel-nestedset#rebuilding-a-tree-from-array). See example payload below."
    returns="a generic 'success' response if successful." >}}

#### Example payload

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
