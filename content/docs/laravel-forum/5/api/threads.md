---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "02:API"
title: "Threads"
weight: 3
---

## Threads

Endpoint URLs are prefixed by `forum.router.prefix` (`/forum/api` by default).

### Recent

```
GET /thread/recent
```

Returns a collection of threads updated since `forum.general.old_thread_threshold`.

### Unread

```
GET /thread/unread
```

Returns a collection of threads that are updated or unread for the authenticated user.

### Mark as read

```
PATCH /thread/unread/mark-as-read
```

Marks the authenticated user's unread/updated threads as read.

Returns a "success" response if successful.

### Fetch

```
GET /thread/{id}
```

Returns a specified thread.

### Lock

```
POST /thread/{id}/lock
```

Locks a specified thread.

Returns the updated thread if successful.

### Unlock

```
POST /thread/{id}/unlock
```

Unlocks a specified thread.

Returns the updated thread if successful.

### Pin

```
POST /thread/{id}/pin
```

Pins a specified thread.

Returns the updated thread if successful.

### Unpin

```
POST /thread/{id}/unpin
```

Unpins a specified thread.

Returns the updated thread if successful.

### Rename

```
POST /thread/{id}/rename
```

Renames a specified thread. Valid attributes are:

| Name             | Type               | Description             | Default |
|------------------|--------------------|-------------------------|---------|
| `title`          | String (required)  | Thread title            | *N/A*   |

Returns the updated thread if successful.

### Move

```
POST /thread/{id}/rename
```

Moves a specified thread. Valid attributes are:

| Name             | Type               | Description             | Default |
|------------------|--------------------|-------------------------|---------|
| `category_id`    | Integer (required) | Destination category ID | *N/A*   |

Returns the updated thread if successful.

### Delete

```
DELETE /thread/{id}
```

Deletes a specified thread (along with its posts if permanently deleting). Valid attributes are:

| Name          | Type               | Description         | Default                                                        |
|---------------|--------------------|---------------------|----------------------------------------------------------------|
| `permadelete` | Boolean (required) | Force hard-deletion | Always `true` if soft-deletion is disabled, otherwise `false`  |

Returns the deleted thread if successful.

### Restore

```
POST /thread/{id}/restore
```

Restores a specified soft-deleted thread.

Returns the restored thread if successful.

### Posts

```
GET /thread/{id}/posts
```

Returns a paginated collection of the thread's posts.

### Store post

```
POST /thread/{id}/posts
```

Creates a post in a specified thread. Valid attributes are:

| Name      | Type              | Description  | Default |
|-----------|-------------------|--------------|---------|
| `content` | String (required) | Post content | *N/A*   |

### Bulk move

```
POST /bulk/thread/move
```

Moves a selection of one or more threads to a specified category. Valid attributes are:

| Name          | Type                     | Description             | Default |
|---------------|--------------------------|-------------------------|---------|
| `threads`     | Integer array (required) | IDs of threads to move  | *N/A*   |
| `category_id` | Integer (required)       | Destination category ID | *N/A*   |

Returns a "success" response if successful.

### Bulk lock

```
POST /bulk/thread/lock
```

Locks a selection of one or more threads. Valid attributes are:

| Name          | Type                     | Description            | Default |
|---------------|--------------------------|------------------------|---------|
| `threads`     | Integer array (required) | IDs of threads to lock | *N/A*   |

Returns a "success" response if successful.

### Bulk unlock

```
POST /bulk/thread/unlock
```

Unlocks a selection of one or more threads. Valid attributes are:

| Name          | Type                     | Description              | Default |
|---------------|--------------------------|--------------------------|---------|
| `threads`     | Integer array (required) | IDs of threads to unlock | *N/A*   |

Returns a "success" response if successful.

### Bulk pin

```
POST /bulk/thread/pin
```

Pins a selection of one or more threads. Valid attributes are:

| Name          | Type                     | Description           | Default |
|---------------|--------------------------|-----------------------|---------|
| `threads`     | Integer array (required) | IDs of threads to pin | *N/A*   |

Returns a "success" response if successful.

### Bulk unpin

```
POST /bulk/thread/unpin
```

Unpins a selection of one or more threads. Valid attributes are:

| Name          | Type                     | Description             | Default |
|---------------|--------------------------|-------------------------|---------|
| `threads`     | Integer array (required) | IDs of threads to unpin | *N/A*   |

Returns a "success" response if successful.

### Bulk delete

```
DELETE /bulk/thread
```

Deletes a selection of one or more threads. Valid attributes are:

| Name          | Type                     | Description               | Default                                                        |
|---------------|--------------------------|---------------------------|----------------------------------------------------------------|
| `threads`     | Integer array (required) | IDs of threads to delete  | *N/A*                                                          |
| `permadelete` | Boolean (required)       | Force hard-deletion       | Always `true` if soft-deletion is disabled, otherwise `false`  |

Returns a "success" response if successful.

### Bulk restore

```
POST /bulk/thread/restore
```

Restores a selection of one or more threads. Valid attributes are:

| Name          | Type                     | Description               | Default |
|---------------|--------------------------|---------------------------|---------|
| `threads`     | Integer array (required) | IDs of threads to restore | *N/A*   |

Returns a "success" response if successful.
