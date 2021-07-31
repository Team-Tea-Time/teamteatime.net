---
layout: "docs"
projects: "Laravel Forum"
versions: "3"
topics: "03:API"
title: "Posts"
weight: 5
---

## Posts

### Index

```
GET <root>/api/post
```

Returns a collection of posts, optionally narrowed down by `thread_id`.

### Store

```
POST <root>/api/post
```

Creates a post with the given attributes. Valid attributes are:

| Name             | Type               | Description        | Default |
|------------------|--------------------|--------------------|---------|
| `thread_id`      | Integer (required) | Parent thread ID   | *N/A*   |
| `post_id`        | Integer            | Parent post ID     | 0       |
| `author_id`      | Integer (required) | Author's user ID   | *N/A*   |
| `content`        | Integer (required) | Post content       | *N/A*   |

### Fetch

```
GET <root>/api/post/<id>
```

Returns a specified post.

### Delete

```
DELETE <root>/api/post/<id>
```

Deletes a specified post.

### Restore

```
PATCH <root>/api/post/<id>/restore
```

Restores the specified post (if it exists and has been soft-deleted).

### Update

```
PATCH <root>/api/post/<id>
```

Updates the specified post with the given attributes (`post_id`, `author_id`, `content`).
