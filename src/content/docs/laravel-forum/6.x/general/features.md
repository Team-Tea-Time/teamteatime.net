---
title: "Features"
order: 1
---

Below is a non-exhaustive list of Laravel Forum's features.

* Threads with support for moving, locking, pinning, and deletion
* Categories
    * Weighted and nestable to any level
    * Optional "private" mode per category using [Laravel Authorization](https://laravel.com/docs/11.x/authorization)
    * Enable/disable threads per category
* Events for all types of forum interaction (see [events](https://github.com/Team-Tea-Time/laravel-forum/tree/6.x/src/Events))
    * All events implement [broadcasting](https://laravel.com/docs/11.x/broadcasting)
* Posts with support for editing and direct replying (automatically embeds a quote to the post)
* Bulk modification or deletion of threads and posts
* Optional soft-deletion support for threads and posts
* UI preset system
    * Allows third-party UI presets to be contributed easily via packages
    * Three presets available out of the box
* Seamless integration with Laravel authentication via configurable middleware and user model
* Permission handling via [Laravel Authorization](https://laravel.com/docs/11.x/authorization)
* Multilingual (see [translations](https://github.com/Team-Tea-Time/laravel-forum/tree/5.0/translations) for a current list)
* JSON REST API exposing all of the functionality available via the front-end routes
    * Includes optional basic search endpoint
    * Supports your authentication method of choice via configurable middleware
* Highly configurable