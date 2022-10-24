---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "00:General"
title: "Configuration"
weight: 5
---

## Configuration

There are 4 configuration files in this version; **api**, **general**, **integration**, and **web**. They should be published to `app/config/forum.{config key}.php` after running `php artisan vendor:publish` as part of the installation.

### API

* `enable`: Whether or not to enable the JSON REST API.
* `enable_search`: Whether or not to enable the post search endpoint. Useful if you'd prefer to use your own search implementation.
* `router`: Router config for the API, including `prefix`, `as` (alias), `namespace`, and `middleware`.

### General

* `old_thread_threshold`: The minimum age of a thread before it should be considered old. This determines whether or not a thread can be considered new or unread for any user. Increasing this value to cover a longer period will increase the ultimate size of your forum_threads_read table. Must be a valid strtotime() string, or set to false to completely disable age-sensitive thread features.
* `soft_deletes`: Whether or not to enable the soft-deletion feature for threads and posts.
* `display_trashed_posts`: Whether or not to display trashed (soft-deleted) posts in threads. When enabled, trashed posts have their contents replaced with a "deleted" label.
* `pagination`: "Per page" values for thread and post pagination. Applies to both the web routes and API routes.
* `validation`: Some basic values for validation rules.

> `display_trashed_posts` works in conjunction with [Policies](/docs/laravel-forum/5/policies/) as follows:
>
> * If set to `true`, always display trashed posts; skip policy checks.
> * If set to `false`, defer to the policy checks (always `false` for guests, otherwise `true` depending on what the `ForumPolicy::viewTrashedPosts` policy method returns).

> Categories are not paginated anywhere due to the fact they can be defined as a tree structure and are rarely high in number, hence the `pagination` configuration value only supports threads and posts.
>
> In package versions prior to **5.3.7**, a `pagination.categories` value is provided, but this is unintentional and has no effect.

### Integration

* `policies`: Contains model<>policy mappings as well as the policy to use for top-level forum abilities.
* `user_model`: The namespace of your application's user model.
* `user_name`: The name of the attribute on the user model to use as a display name (e.g. next to posts).

### Web

* `enable`: Whether or not to enable the web routes.
* `router`: Router config for the web routes, including `prefix`, `as` (alias), `namespace`, `middleware`, and `auth_middleware` (applied to specific routes where authentication is needed).
* `route_prefixes`: Prefixes to use in category, thread, and post URLs.
* `default_category_color`: The default color (in hex format) to apply to newly created categories.
* `utility_class`: The namespace to the static class to use for various web utility methods. This is automatically aliased to `Forum` for ease of use in views.
