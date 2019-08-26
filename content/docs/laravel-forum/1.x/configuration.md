---
layout: "docs"
projects: "Laravel Forum"
versions: "1.x"
topics: "01:General"
title: "Configuration"
weight: 3
---

## Configuration

There are 4 configuration files in this version; **integration**, **permissions**, **preferences** and **routes**. Run `php artisan config:publish forum` to publish them to `app/config/packages/forum`, where you can make any necessary edits.

See below for overviews of each file.

### Integration

* `user_model`: The namespace of your application's user model.
* `current_user`: Closure. Returns the currently authenticated user model. The user is assumed to be unauthenticated if a non-object or null response is returned by this.
* `process_alert`: Closure. Handles any alert messages to be displayed to the user; change this to send forum alerts through whatever system you use.
* `controller`: The namespace of the controller to use for all forum routes. The controller specified here should extend `\Riari\Forum\Controllers\BaseController` to inherit the default methods.

### Permissions

This file contains closures for all of the various permission checks in the forum. Each one receives either a category/thread/post object and the current user object. They should all return booleans.

### Preferences

* `thread`: Contains thread settings.
  * `cutoff_age`: A valid `strtotime()` string that is used to determine when a thread should be considered "old" and therefore no longer has read/unread status. Defaults to `-1 month`.
* `threads_per_category`: The number of threads to display per page in a category view.d
* `posts_per_thread`: The number of posts to display per page in a thread view.
* `pagination_view`: The name of the view to use to rendering pagination links.
* `cache_lifetime`: The duration, in minutes, to cache certain attributes such as thread and post counts. Set to `0` to disable.
* `soft_delete`: Specifies whether or not to enable soft-deletion of threads and posts.

### Routes

* `enable`: Enable/disable forum routing. Set to `false` to effectively disable your forum.
* `root`: The prefix to use for all forum URLs. Defaults to `/forum`.
