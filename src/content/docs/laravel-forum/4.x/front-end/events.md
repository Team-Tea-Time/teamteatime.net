---
title: "Events"
order: 11
---

Events provided by the front-end cover some basic user interaction scenarios and implement standard [Laravel Events](https://laravel.com/docs/5.1/events).

If you need to perform an action when a category, thread or post is being created, updated or deleted in the database, take a look at [Eloquent Events](https://laravel.com/docs/5.1/eloquent#events).

These events are all namespaced under `Riari\Forum\Frontend\Events`.

| Name                  | Fires when a user...                                  |
|-----------------------|-------------------------------------------------------|
| `UserCreatingPost`    | …views the "create post" (thread reply) page.         |
| `UserEditingPost`     | …views the "edit post" page.                          |
| `UserCreatingThread`  | …views the "create thread" page.                      |
| `UserViewingNew`      | …views his or her "new and updated" threads.          |
| `UserMarkingNew`      | …marks his or her "new and updated" threads as read.  |
| `UserViewingIndex`    | …views the forum index.                               |
| `UserViewingCategory` | …views a category.                                    |
| `UserViewingThread`   | …views a thread.                                      |
| `UserViewingPost`     | …views a post.                                        |
