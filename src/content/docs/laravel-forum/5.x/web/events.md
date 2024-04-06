---
title: "Events"
order: 10
---

Events cover all user interactions and are implemented as standard [Laravel Events](https://laravel.com/docs/8.x/events).

These events are all namespaced under `TeamTeaTime\Forum\Events`. Note that while they cover every CRUD action, you can still use [Eloquent Observers](https://laravel.com/docs/8.x/eloquent#observers) to react to events at the model level.
  
| Name                        | Dispatches when a user...                                                     |
|-----------------------------|-------------------------------------------------------------------------------|
| `UserBulkDeletedPosts`      | …deletes one or more posts via bulk deletion.                                 |
| `UserBulkDeletedThreads`    | …deletes one or more threads via bulk deletion.                               |
| `UserBulkLockedThreads`     | …locks one or more unlocked threads via bulk locking.                         |
| `UserBulkManagedCategories` | …updates one or more categories via bulk management.                          |
| `UserBulkMovedThreads`      | …moves one or more threads via bulk moving.                                   |
| `UserBulkPinnedThreads`     | …pins one or more unpinned threads via bulk pinning.                          |
| `UserBulkRestoredPosts`     | …restores one or more soft-deleted posts via bulk restoring.                  |
| `UserBulkRestoredThreads`   | …restores one or more soft-deleted threads via bulk restoring.                |
| `UserBulkUnlockedThreads`   | …unlocks one or more locked threads via bulk unlocking.                       |
| `UserBulkUnpinnedThreads`   | …unpins one or more pinned threads via bulk unpinning.                        |
| `UserCreatedCategory`       | …creates a new category.                                                      |
| `UserCreatedPost`           | …creates a new reply to a thread.                                             |
| `UserCreatedThread`         | …creates a new thread (along with its first post).                            |
| `UserCreatingPost`          | …views the "create post" (thread reply) page.                                 |
| `UserCreatingThread`        | …views the "create thread" page.                                              |
| `UserDeletedCategory`       | …deletes a single category.                                                   |
| `UserDeletedPost`           | …deletes a single post.                                                       |
| `UserDeletedThread`         | …deletes a single thread.                                                     |
| `UserEditingPost`           | …views the "edit post" page.                                                  |
| `UserLockedThread`          | …locks a single thread.                                                       |
| `UserMarkedThreadsRead`     | …marks their unread/updated threads as read (optionally limited by category). |
| `UserMovedThread`           | …moves a single thread to a different category.                               |
| `UserPinnedThread`          | …pins a single unpinned thread.                                               |
| `UserRenamedThread`         | …changes a single thread's title.                                             |
| `UserRestoredPost`          | …restores a single soft-deleted post.                                         |
| `UserRestoredThread`        | …restores a single soft-deleted thread.                                       |
| `UserSearchedPosts`         | …submits a search query for posts.                                            |
| `UserUnlockedThread`        | …unlocks a single locked thread.                                              |
| `UserUnpinnedThread`        | …unpins a single pinned thread.                                               |
| `UserUpdatedCategory`       | …updates a single category.                                                   |
| `UserUpdatedPost`           | …updates the content of a single post.                                        |
| `UserViewingCategory`       | …views a category.                                                            |
| `UserViewingIndex`          | …views the forum index.                                                       |
| `UserViewingPost`           | …views a post.                                                                |
| `UserViewingRecent`         | …views recent threads.                                                        |
| `UserViewingThread`         | …views a thread.                                                              |
| `UserViewingUnread`         | …views their "unread and updated" threads.                                    |
