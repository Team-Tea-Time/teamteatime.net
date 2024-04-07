---
title: "Configuration"
order: 4
---

### Server

If you installed Xdebug before version 2.3, you may need to modify `xdebug.max_nesting_level`. The suggested and new default value from version 2.3 onwards is `256`.

### Package

There are 5 configuration files in this version; **api**, **integration**, **preferences**, **routing** and **validation**. They should already be published to `app/config/forum.{config key}.php` after running `php artisan vendor:publish` as part of the installation.

#### API

* `token`: A random string used to authenticate API requests. This is used by the [API dispatcher](/docs/laravel-forum/3/api/internal-dispatching/) and is by default set to a random 32-character string to maximise security on a fresh install.

#### Integration

* `policies`: Contains model<>policy mappings as well as the policy to use for top-level forum abilities.
* `user_model`: The namespace of your application's user model.
* `user_name`: The name of the attribute on the user model to use as a display name (e.g. next to posts).

#### Preferences

* `thread`: Contains thread settings.
  * `cutoff_age`: A valid `strtotime()` string that is used to determine when a thread should be considered "old" and therefore no longer has read/unread status. Defaults to `7 days`.
* `pagination`: Contains X per page values for categories, threads and posts.
* `cache_lifetimes`: Contains cache lifetimes (in minutes) for various model attributes, as well as a default value to fall back to.
* `soft_delete`: Specifies whether or not to enable soft-deletion of threads and posts.
* `display_trashed_posts`: Determines whether or not soft-deleted posts should be included in threads.

#### Routing

* `enable`: Enable/disable forum routing. Set to `false` to effectively disable your forum.
* `root`: The prefix to use for all forum URLs. Defaults to `/forum`.

#### Validation

* `rules`: Contains validation rules for all of the attributes/fields used in the forum. Note that the 'required' rule is automatically enforced where applicable.
