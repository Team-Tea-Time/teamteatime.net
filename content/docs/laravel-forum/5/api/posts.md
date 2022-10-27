---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "02:API"
title: "Posts"
weight: 4
---

## Posts

Endpoint paths are prefixed with the `forum.router.prefix` config value (`/forum/api` by default).

{{< api-endpoint 
    name="Search"
    method="POST"
    path="/post/search"
    returns="a collection of posts matching the given term. See parameter list below." >}}

#### Parameters

| Name   | Type              | Description            |
|--------|-------------------|------------------------|
| `term` | String (required) | The term to search for |

> **Note**
> 
> This endpoint uses a basic search implementation that works out of the box with no external dependencies, making it a good option for implementing XHR-based search on a small forum. However, due to its rudimentary nature, it's not designed to scale well and you may wish to disable the endpoint (by setting `forum.api.enable_search` to `false`) to implement your own solution with [Laravel Scout](https://laravel.com/docs/8.x/scout) or similar.

{{< api-endpoint 
    name="Fetch recent"
    method="GET"
    path="/post/recent"
    returns="a collection of posts updated since `forum.general.old_thread_threshold`." >}}

{{< api-endpoint 
    name="Fetch unread"
    method="GET"
    path="/post/unread"
    returns="a collection of threads that are updated or unread for the authenticated user." >}}

{{< api-endpoint 
    name="Fetch"
    method="GET"
    path="/post/{id:int}"
    returns="the post specified by `{id}`." >}}

{{< api-endpoint 
    name="Update"
    method="PATCH"
    path="/post/{id:int}"
    description="Updates the post specified by `{id}`. See parameter list below."
    returns="the updated post object if successful." >}}

#### Parameters

| Name      | Type              | Description      |
|-----------|-------------------|------------------|
| `content` | String (required) | The post content |

{{< api-endpoint 
    name="Delete"
    method="DELETE"
    path="/post/{id:int}"
    description="Deletes the post specified by `{id}`. See parameter list below."
    returns="the deleted post object if successful." >}}

#### Parameters

| Name          | Type               | Description         | Default                                                        |
|---------------|--------------------|---------------------|----------------------------------------------------------------|
| `permadelete` | Boolean            | Force hard-deletion | Always `true` if soft-deletion is disabled, otherwise `false`  |

{{< api-endpoint 
    name="Restore"
    method="POST"
    path="/post/{id:int}/restore"
    description="Restores the soft-deleted post specified by `{id}`."
    returns="the restored post object if successful." >}}

{{< api-endpoint 
    name="Bulk delete"
    method="DELETE"
    path="/bulk/post"
    description="Deletes a selection of one or more posts. Any posts not eligible for selection are left unchanged. See parameter list below."
    returns="a generic 'success' response if successful." >}}

#### Parameters

| Name          | Type                     | Description               | Default                                                        |
|---------------|--------------------------|---------------------------|----------------------------------------------------------------|
| `posts`       | Integer array (required) | IDs of posts to delete    | *N/A*                                                          |
| `permadelete` | Boolean                  | Force hard-deletion       | Always `true` if soft-deletion is disabled, otherwise `false`  |

Returns a "success" response if successful.

{{< api-endpoint 
    name="Bulk restore"
    method="Post"
    path="/bulk/post/restore"
    description="Restores a selection of one or more posts. Any posts not eligible for selection are left unchanged. See parameter list below."
    returns="a generic 'success' response if successful." >}}

#### Parameters

| Name    | Type                     | Description             |
|---------|--------------------------|-------------------------|
| `posts` | Integer array (required) | IDs of posts to restore |
