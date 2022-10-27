---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "02:API"
title: "Threads"
weight: 3
---

## Threads

Endpoint paths are prefixed with the `forum.router.prefix` config value (`/forum/api` by default).

{{< api-endpoint 
    name="Fetch recent"
    method="GET"
    path="/thread/recent"
    returns="a collection of threads updated since `forum.general.old_thread_threshold`." >}}

{{< api-endpoint 
    name="Fetch unread"
    method="GET"
    path="/thread/unread"
    returns="a collection of threads that are updated or unread for the authenticated user." >}}

{{< api-endpoint 
    name="Mark as read"
    method="PATCH"
    path="/thread/unread/mark-as-read"
    description="Marks the authenticated user's unread/updated threads as read."
    returns="a generic 'success' response if successful." >}}

{{< api-endpoint 
    name="Fetch"
    method="GET"
    path="/thread/{id:int}"
    returns="the thread specified by `{id}` if found and accessible, otherwise a 404 error." >}}

{{< api-endpoint 
    name="Lock"
    method="POST"
    path="/thread/{id:int}/lock"
    description="Locks the thread specified by `{id}`."
    returns="the updated thread object if successful." >}}

{{< api-endpoint 
    name="Unlock"
    method="POST"
    path="/thread/{id:int}/unlock"
    description="Unlocks the thread specified by `{id}`."
    returns="the updated thread object if successful." >}}

{{< api-endpoint 
    name="Pin"
    method="POST"
    path="/thread/{id:int}/pin"
    description="Pins the thread specified by `{id}`."
    returns="the updated thread object if successful." >}}

{{< api-endpoint 
    name="Unpin"
    method="POST"
    path="/thread/{id:int}/unpin"
    description="Unpins the thread specified by `{id}`."
    returns="the updated thread object if successful." >}}

{{< api-endpoint 
    name="Rename"
    method="POST"
    path="/thread/{id:int}/rename"
    description="Renames the thread specified by `{id}`. See parameter list below."
    returns="the updated thread object if successful." >}}

#### Parameters

| Name             | Type               | Description             |
|------------------|--------------------|-------------------------|
| `title`          | String (required)  | Thread title            |

{{< api-endpoint 
    name="Move"
    method="POST"
    path="/thread/{id:int}/move"
    description="Moves the thread specified by `{id}`. See parameter list below."
    returns="the updated thread object if successful." >}}

#### Parameters

| Name             | Type               | Description             |
|------------------|--------------------|-------------------------|
| `category_id`    | Integer (required) | Destination category ID |

{{< api-endpoint 
    name="Delete"
    method="DELETE"
    path="/thread/{id:int}"
    description="Deletes the thread specified by `{id}`. See parameter list below."
    returns="the deleted thread object if successful." >}}

#### Parameters

| Name          | Type               | Description         | Default                                                        |
|---------------|--------------------|---------------------|----------------------------------------------------------------|
| `permadelete` | Boolean            | Force hard-deletion | Always `true` if soft-deletion is disabled, otherwise `false`  |

{{< api-endpoint 
    name="Restore"
    method="POST"
    path="/thread/{id:int}/restore"
    description="Restores the soft-deleted thread specified by `{id}`."
    returns="the restored thread object if successful." >}}

{{< api-endpoint 
    name="Fetch posts"
    method="GET"
    path="/thread/{id:int}/posts"
    returns="a paginated collection of posts belonging to the thread specified by `{id}`." >}}

{{< api-endpoint 
    name="Store post"
    method="POST"
    path="/thread/{id:int}/posts"
    description="Creates a post in the thread specified by `{id}`. See parameter list below."
    returns="the created post object if successful." >}}

#### Parameters

| Name      | Type              | Description  |
|-----------|-------------------|--------------|
| `content` | String (required) | Post content |

{{< api-endpoint 
    name="Bulk move"
    method="POST"
    path="/bulk/thread/move"
    description="Moves a selection of one or more threads. Any threads not eligible for selection are left unchanged. See parameter list below."
    returns="a generic 'success' response if successful." >}}

#### Parameters

| Name          | Type                     | Description             |
|---------------|--------------------------|-------------------------|
| `threads`     | Integer array (required) | IDs of threads to move  |
| `category_id` | Integer (required)       | Destination category ID |

{{< api-endpoint 
    name="Bulk lock"
    method="POST"
    path="/bulk/thread/lock"
    description="Locks a selection of one or more threads. Any threads not eligible for selection are left unchanged. See parameter list below."
    returns="a generic 'success' response if successful." >}}

#### Parameters

| Name          | Type                     | Description            |
|---------------|--------------------------|------------------------|
| `threads`     | Integer array (required) | IDs of threads to lock |

{{< api-endpoint 
    name="Bulk unlock"
    method="POST"
    path="/bulk/thread/unlock"
    description="Unlocks a selection of one or more threads. Any threads not eligible for selection are left unchanged. See parameter list below."
    returns="a generic 'success' response if successful." >}}

#### Parameters

| Name          | Type                     | Description              |
|---------------|--------------------------|--------------------------|
| `threads`     | Integer array (required) | IDs of threads to unlock |

{{< api-endpoint 
    name="Bulk pin"
    method="POST"
    path="/bulk/thread/pin"
    description="Pins a selection of one or more threads. Any threads not eligible for selection are left unchanged. See parameter list below."
    returns="a generic 'success' response if successful." >}}

#### Parameters

| Name          | Type                     | Description              |
|---------------|--------------------------|--------------------------|
| `threads`     | Integer array (required) | IDs of threads to pin    |

{{< api-endpoint 
    name="Bulk unpin"
    method="POST"
    path="/bulk/thread/unpin"
    description="Unpins a selection of one or more threads. Any threads not eligible for selection are left unchanged. See parameter list below."
    returns="a generic 'success' response if successful." >}}

#### Parameters

| Name          | Type                     | Description              |
|---------------|--------------------------|--------------------------|
| `threads`     | Integer array (required) | IDs of threads to unpin  |

{{< api-endpoint 
    name="Bulk delete"
    method="DELETE"
    path="/bulk/thread"
    description="Deletes a selection of one or more threads. Any threads not eligible for selection are left unchanged. See parameter list below."
    returns="a generic 'success' response if successful." >}}

#### Parameters

| Name          | Type                     | Description               | Default                                                        |
|---------------|--------------------------|---------------------------|----------------------------------------------------------------|
| `threads`     | Integer array (required) | IDs of threads to delete  | *N/A*                                                          |
| `permadelete` | Boolean                  | Force hard-deletion       | Always `true` if soft-deletion is disabled, otherwise `false`  |

{{< api-endpoint 
    name="Bulk restore"
    method="POST"
    path="/bulk/thread/restore"
    description="Restores a selection of one or more soft-deleted threads. Any threads not eligible for selection are left unchanged. See parameter list below."
    returns="a generic 'success' response if successful." >}}

#### Parameters

| Name          | Type                     | Description               |
|---------------|--------------------------|---------------------------|
| `threads`     | Integer array (required) | IDs of threads to restore |
