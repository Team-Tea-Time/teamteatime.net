---
title: "Configuration"
order: 2
---

There are 4 configuration files in this version; **integration**, **permissions**, **preferences** and **routing**. They should already be published to `app/config/forum.{config key}.php` after running `php artisan vendor:publish` as part of the installation.

### Integration

* `user_model`: The namespace of your application's user model.
* `user_name_attribute`: The name of the attribute on the user model to use as a display name (e.g. next to posts).
* `current_user`: Closure. Returns the currently authenticated user model. The user is assumed to be unauthenticated if a non-object or null response is returned by this.
* `process_alert`: Closure. Handles any alert messages to be displayed to the user; change this to send forum alerts through whatever system you use.
* `process_denied`: Closure. Called when a permission is denied to user. This function should not return anything, but rather throw an exception or carry out any other operations that might be necessary. The default is to send a 403 response to the browser by calling `App::abort(403)`. Does not apply to inline permission checks (e.g. for buttons in views).
* `controller`: The namespace of the controller to use for all forum routes. The controller specified here should extend `\Riari\Forum\Controllers\BaseController` to inherit the default methods.

### Permissions

This file contains closures for all of the various permission checks in the forum. Each one receives either a category/thread/post object and the current user object. They should all return booleans.

### Preferences

* `thread`: Contains thread settings.
  * `cutoff_age`: A valid `strtotime()` string that is used to determine when a thread should be considered "old" and therefore no longer has read/unread status. Defaults to `-1 month`.
  * `throttle_view_count_interval`: The minimum duration, in seconds, between incrementing the view count per thread per user. Set to `0` to disable.
* `threads_per_category`: The number of threads to display per page in a category view.
* `posts_per_thread`: The number of posts to display per page in a thread view.
* `cache_lifetime`: The duration, in minutes, to cache certain attributes such as thread and post counts. Set to `0` to disable.
* `validation_rules`: Contains validation rules for threads and posts.
* `soft_delete`: Specifies whether or not to enable soft-deletion of threads and posts.

### Routing

* `enable`: Enable/disable forum routing. Set to `false` to effectively disable your forum.
* `root`: The prefix to use for all forum URLs. Defaults to `/forum`.