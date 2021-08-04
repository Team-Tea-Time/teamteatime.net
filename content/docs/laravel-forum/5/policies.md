---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "00:General"
title: "Policies"
weight: 6
---

## Policies

Four [Authorization Policies](http://laravel.com/docs/8.x/authorization) are defined to provide default permission checks. You can override them and change the corresponding namespaces specified in the `forum.integration.policies` config value to allow or deny forum abilities to different users.

Note that every policy method must return a boolean (`true` to allow or `false` to deny).

### Forum

```
TeamTeaTime\Forum\Policies\ForumPolicy
```

This policy defines a few top-level abilities that don't apply to a specific category, thread or post.

Methods in this policy accept a `$user` parameter.

| Ability                | Description                                         |
|------------------------|-----------------------------------------------------|
| `createCategories`     | Allows creating categories at any level.            |
| `manageCategories`     | Encompasses category modifying/deleting abilities.  |
| `moveCategories`       | Allows relocating and reordering categories.        |
| `renameCategories`     | Allows changing a category's title and description. |
| `markThreadsAsRead`    | Allows marking new/updated threads as read.         |
| `viewTrashedThreads`   | Allows viewing threads that have been soft-deleted. |
| `viewTrashedPosts`     | Allows viewing posts that have been soft-deleted.   |

### Category

```
TeamTeaTime\Forum\Policies\CategoryPolicy
```

This policy defines abilities pertaining to individual categories.

Methods in this policy accept `$user` and `$category` parameters.

| Ability             | Description                                                      |
|---------------------|------------------------------------------------------------------|
| `createThreads`     | Allows new thread creation in the category.                      |
| `manageThreads`     | Encompasses thread modifying/deleting abilities in the category. |
| `deleteThreads`     | Allows deleting threads in the category.                         |
| `enableThreads`     | Allows enabling or disabling thread creation in the category.    |
| `moveThreadsFrom`   | Allows moving threads from the category.                         |
| `moveThreadsTo`     | Allows moving threads to the category.                           |
| `lockThreads`       | Allows (un)locking of threads in the category.                   |
| `pinThreads`        | Allows (un)pinning of threads in the category.                   |
| `markThreadsAsRead` | Allows marking new/updated threads in this category as read.     |
| `view`              | Allows viewing the category (if it's set to be private). Takes precedence over `ThreadPolicy::view` when browsing/viewing threads. |
| `delete`            | Allows deletion of the category.                                 |

### Thread

```
TeamTeaTime\Forum\Policies\ThreadPolicy
```

This policy defines abilities pertaining to individual threads.

Methods in this policy accept `$user` and `$thread` parameters.

| Ability        | Description                                                                        |
|----------------|------------------------------------------------------------------------------------|
| `view`         | Allows viewing the thread. `CategoryPolicy::view` takes precedence.                |
| `deletePosts`  | Allows deleting posts in the thread. Takes precedence over `PostPolicy::delete`.   |
| `restorePosts` | Allows restoring posts in the thread. Takes precedence over `PostPolicy::restore`. |
| `rename`       | Allows renaming the thread.                                                        |
| `reply`        | Allows replying to the thread (creating a new post).                               |
| `delete`       | Allows deleting the thread.                                                        |
| `restore`      | Allows restoring the thread.                                                       |

### Post

```
TeamTeaTime\Forum\Policies\PostPolicy
```

This policy defines abilities pertaining to individual posts.

Methods in this policy accept `$user` and `$post` parameters.

| Ability   | Description                                                               |
|-----------|---------------------------------------------------------------------------|
| `edit`    | Allows editing the post.                                                  |
| `delete`  | Allows deleting the post. `ThreadPolicy::deletePosts` takes precedence.   |
| `restore` | Allows restoring the post. `ThreadPolicy::restorePosts` takes precedence. |