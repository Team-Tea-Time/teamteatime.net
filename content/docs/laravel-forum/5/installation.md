---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "00:General"
title: "Installation"
weight: 3
---

## Installation

### Requirements

+ PHP 7.4 or above
+ Laravel 6 or above

### Step 1: Install the package

Install the package via composer:

```
composer require riari/laravel-forum:~5.0
```

[Package Discovery](https://laravel.com/docs/8.x/packages#package-discovery) should take care of registering the service provider automatically, but if you need to do so manually, add the service provider to your `config/app.php`:

```php
TeamTeaTime\Forum\ForumServiceProvider::class,
```

### Step 2: Publish the package files

Run the vendor:publish command to publish the package config, translations and migrations to your app's directories:

`php artisan vendor:publish`

### Step 3: Update your database

Run your migrations:

`php artisan migrate`

Assuming this succeeds, you can now define your forum categories in the `forum_categories` table, or authenticate with a user that has the `createCategories` ability (granted to all users by default) and use the 'Create category' panel displayed on the forum index (`/forum`).

### Additional steps

#### Configuration

Several configuration files are published to your application's config directory, each prefixed with `forum.`. Refer to these for a variety of options for changing the behaviour of the forum and how it integrates with key parts of your application code.

> You may need to modify the `forum.integration.user_model` config option according to the location of your user model. By default, it matches the default namespace for the user model in Laravel 8. Additionally, you may need to modify the `forum.integration.user_name` option; this specifies which attribute on the user model should be used as a display name in the forum views.

#### Policies

You will likely wish to modify the default policies to integrate them with whatever permission system you may be using; see [Policies](/docs/laravel-forum/5/policies/) for further details.

#### Translations

Laravel Forum 5 currently supports 13 languages: German, English, Spanish, French, Italian, Dutch, Romanian, Russian, Thai, Turkish, Serbian, Portuguese (Brazil) and Swedish. The translation files are published to `resources/lang/vendor/forum/{locale}`. **Some new language strings have been introduced in 5.0 but not yet translated; PRs to translate these would be greatly appreciated.**