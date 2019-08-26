---
layout: "docs"
projects: "Laravel Forum"
versions: "3.x"
topics: "03:API"
title: "Threads"
weight: 4
---

## Threads

### Index

```
GET <root>/api/thread
```

Returns a collection of threads, optionally narrowed down by [request scopes](docs/laravel-forum/3.x/api.request-scopes.md) and/or `category_id`.

### Index New

```
GET <root>/api/thread/new
```

Returns a collection of new or updated threads for the current user.

### Mark New

```
PATCH <root>/api/thread/new
```

Marks the current user's new or updated threads as read (if applicable).

### Store

```
POST <root>/api/thread
```

Creates a thread with the given attributes. Valid attributes are:

| Name             | Type               | Description        |
|------------------|--------------------|--------------------|
| `category_id`    | Integer (required) | Parent category ID |
| `author_id`      | Integer (required) | Author's user ID   |
| `title`          | String (required)  | Thread title       |
| `content`        | Integer (required) | Post content       |

### Fetch

```
GET <root>/api/thread/<id>
```

Returns a specified thread.

### Delete

```
DELETE <root>/api/thread/<id>
```

Deletes a specified thread.

### Restore

```
PATCH <root>/api/thread/<id>/restore
```

Restores the specified thread (if it exists and has been soft-deleted).

### Move

```
PATCH <root>/api/thread/<id>/move
```

Gives the specified thread a new `category_id` (if the category has threads enabled).

### Lock

```
PATCH <root>/api/thread/<id>/lock
```

Locks the specified thread.

### Unlock

```
PATCH <root>/api/thread/<id>/unlock
```

Unlocks the specified thread.

### Pin

```
PATCH <root>/api/thread/<id>/pin
```

Pins the specified thread.

### Unpin

```
PATCH <root>/api/thread/<id>/unpin
```

Unpins the specified thread.

### Rename

```
PATCH <root>/api/thread/<id>/rename
```

Gives the specified thread a new `title`.
