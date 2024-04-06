---
title: "Authentication"
order: 12
---

The API is authentication-agnostic and can be made to work with any authentication mechanism supported by Laravel. In most cases, all you need to do is override the `forum.api.router.middleware` config option to specify whichever authentication middleware you would like to use across the entire API.

If you're using [Laravel Sanctum](https://laravel.com/docs/11.x/sanctum), you'll likely want to set the middleware to `['api', 'auth:sanctum']`. Refer to the Laravel docs for more guidance.