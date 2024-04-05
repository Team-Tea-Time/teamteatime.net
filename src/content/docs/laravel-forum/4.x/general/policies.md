---
title: "Policies"
order: 5
---

Four [Authorization Policies](http://laravel.com/docs/5.1/authorization#policies) are defined to provide default permission checks. You can override them and change the corresponding namespaces specified in the `forum.integration.policies` config value to allow or deny forum abilities to different users.

Note that every policy method must return a boolean (`true` to allow or `false` to deny).

### Forum

```
Riari\Forum\Policies\ForumPolicy
```

This policy defines a few top-level abilities that don't apply to a specific category, thread or post.

Methods in this policy accept a `$user` parameter.

| Ability                | Description                                         |
|------------------------|-----------------------------------------------------|
| `createCategories`     | Allows creating categories at any level.            |
| `manageCategories`     | Encompasses category modifying/deleting abilities.  |
| `moveCategories`       | Allows relocating and reordering categories.        |
| `renameCategories`     | Allows changing a category's title and description. |
| `markNewThreadsAsRead` | Allows marking new/updated threads as 'read'.       |
| `viewTrashedThreads`   | Allows viewing threads that have been soft-deleted. |
| `viewTrashedPosts`     | Allows viewing posts that have been soft-deleted.   |

### Category

```
Riari\Forum\Policies\CategoryPolicy
```

This policy defines abilities pertaining to individual categories.

Methods in this policy accept `$user` and `$category` parameters.

| Ability           | Description                                                      |
|-------------------|------------------------------------------------------------------|
| `createThreads`   | Allows new thread creation in the category.                      |
| `manageThreads`   | Encompasses thread modifying/deleting abilities in the category. |
| `deleteThreads`   | Allows deleting threads in the category.                         |
| `enableThreads`   | Allows enabling or disabling thread creation in the category.    |
| `moveThreadsFrom` | Allows moving threads from the category.                         |
| `moveThreadsTo`   | Allows moving threads to the category.                           |
| `lockThreads`     | Allows (un)locking of threads in the category.                   |
| `pinThreads`      | Allows (un)pinning of threads in the category.                   |
| `view`            | Allows viewing the category (if it's set to be private).         |
| `delete`          | Allows deletion of the category.                                 |

### Thread

```
Riari\Forum\Policies\ThreadPolicy
```

This policy defines abilities pertaining to individual threads.

Methods in this policy accept `$user` and `$thread` parameters.

| Ability       | Description                                          |
|---------------|------------------------------------------------------|
| `deletePosts` | Allows deleting posts in the thread.                 |
| `rename`      | Allows renaming the thread.                          |
| `reply`       | Allows replying to the thread (creating a new post). |
| `delete`      | Allows deletion of the thread.                       |

### Post

```
Riari\Forum\Policies\PostPolicy
```

This policy defines abilities pertaining to individual posts.

Methods in this policy accept `$user` and `$post` parameters.

| Ability  | Description                                                                     |
|----------|---------------------------------------------------------------------------------|
| `edit`   | Allows editing the post.                                                        |
| `delete` | Allows deletion of the post. Depends on `ThreadPolicy`'s `deletePosts` ability. |
