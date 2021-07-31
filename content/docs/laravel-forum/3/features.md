---
layout: "docs"
projects: "Laravel Forum"
versions: "3"
topics: "01:General"
title: "Features"
weight: 2
---

## Features

* RESTful API for all data querying and persistence (including a dispatcher for internal use)
* Categories
  * Weighted and nestable to any level
  * Optional "private" mode using [Laravel Authorization](http://laravel.com/docs/5.1/authorization)
  * Enable/disable threads per category
* Threads with moving, locking, pinning and deletion
* Posts with editing and smart replying
* Bulk modification or deletion of threads and posts
* Optional soft-deletion support for threads and posts
* Alert callback (to display success/validation messages using your preferred method)
* Authentication and user integration via Laravel's auth interface and application user model
* Permission handling via [Laravel Authorization](http://laravel.com/docs/5.1/authorization)
* Multilingual (see [3 translations](https://github.com/Riari/laravel-forum/tree/docs/laravel-forum/3/translations) for a current list)
* Highly configurable
