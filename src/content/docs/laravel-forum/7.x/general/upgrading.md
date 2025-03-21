---
title: "Upgrading"
order: 3
---

There are no breaking changes from 6 to 7, so you can upgrade simply upgrade by updating the package with composer:

```
composer require riari/laravel-forum:^7.0
```

There are new migrations to support new features added in 7, so you should also migrate your database (even if you don't intend to use the new features):

```
php artisan migrate
```

You can optionally publish the config files via `php artisan vendor:publish` to get up-to-date config. However, **be aware that this will overwrite your existing config files** - you may prefer to review the [latest config files](https://github.com/Team-Tea-Time/laravel-forum/tree/7.x/config) and pull in new values manually.