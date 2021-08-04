---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "02:API"
title: "Posts"
weight: 4
---

## Posts

### Search

```
POST /post/search
```

Returns a collection of posts matching the given term. Valid attributes are:

| Name   | Type              | Description            | Default |
|--------|-------------------|------------------------|---------|
| `term` | String (required) | The term to search for | *N/A*   |

> This endpoint uses a basic search implementation that works out of the box with no external dependencies, making it a good option for implementing XHR-based search on a small forum. However, due to its rudimentary nature, it's not designed to scale well and you may wish to disable the endpoint (by setting `forum.api.enable_search` to `false`) to implement your own solution with [Laravel Scout](https://laravel.com/docs/8.x/scout) or similar.

### Recent

```
GET /post/recent
```

Returns a collection of posts updated since `forum.general.old_thread_threshold`.

### Unread

```
GET /post/unread
```

Returns a collection of threads that are updated or unread for the authenticated user.

### Fetch

```
GET /post/{id}
```

Returns a specified post.

### Update

```
PATCH /post/{id}
```

Updates a specified post. Valid attributes are:

| Name      | Type              | Description      | Default |
|-----------|-------------------|------------------|---------|
| `content` | String (required) | The post content | *N/A*   |

### Delete

```
DELETE /post/{id}
```

Deletes a specified post. Valid attributes are:

| Name          | Type               | Description         | Default                                                        |
|---------------|--------------------|---------------------|----------------------------------------------------------------|
| `permadelete` | Boolean (required) | Force hard-deletion | Always `true` if soft-deletion is disabled, otherwise `false`  |

Returns the deleted post if successful.

### Restore

```
POST /post/{id}/restore
```

Restores a specified soft-deleted post.

Returns the restored post if successful.

### Bulk delete

```
DELETE /bulk/post
```

Deletes a selection of one or more posts. Valid attributes are:

| Name          | Type                     | Description               | Default                                                        |
|---------------|--------------------------|---------------------------|----------------------------------------------------------------|
| `posts`       | Integer array (required) | IDs of posts to delete    | *N/A*                                                          |
| `permadelete` | Boolean (required)       | Force hard-deletion       | Always `true` if soft-deletion is disabled, otherwise `false`  |

Returns a "success" response if successful.

### Bulk restore

```
POST /bulk/post/restore
```

Restores a selection of one or more posts. Valid attributes are:

| Name    | Type                     | Description             | Default |
|---------|--------------------------|-------------------------|---------|
| `posts` | Integer array (required) | IDs of posts to restore | *N/A*   |

Returns a "success" response if successful.
