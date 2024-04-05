---
title: "Installation"
order: 2
---

### Requirements

+ PHP 5.4 or above
+ Laravel 5.1 or 5.2 (see version 4 for Laravel 5.3 and above)

### Step 1: Install the package

Install the package via composer:

```
composer require riari/laravel-forum:~3.0
```

Then add the service provider to your `config/app.php`:

```php
Riari\Forum\ForumServiceProvider::class,
```

Installing the [front-end](/docs/laravel-forum/3/front-end/) is recommended.

### Step 2: Publish the package files

Run the vendor:publish command to publish the package config, translations and migrations to your app's directories:

`php artisan vendor:publish`

### Step 3: Update your database

Run your migrations:

`php artisan migrate`

Assuming this succeeds, you can now define your forum categories in the `forum_categories` table, or authenticate with a user that has the `createCategories` ability (granted to all users by default) and use the 'Create category' panel displayed on the forum index (`/forum`).
