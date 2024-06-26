---
title: "Installation"
order: 1
---

### Compatibility

This version is written for Laravel 4. See **2.x** or **3.x** for Laravel 5.

### Step 1: Install the package

Install the package via composer:

```
composer require riari/laravel-forum:~1
```

Then add the following service provider to your app/config/app.php:

```php
'Riari\Forum\ForumServiceProvider',
```

### Step 2: Deploy the controller

Run the forum install command to auto-deploy the forum controller to your app/controllers folder:

`php artisan forum:install`

### Step 3: Update your database

Publish the package migrations:

`php artisan migrate:publish riari/laravel-forum`

Then run your migrations:

`php artisan migrate`

Once complete, you can define your categories and sub-categories in the forum_categories table. The schema is simple, so you should be able to do that on your own using Laravel seeds or straightforward SQL.

Once your categories are set up, go to <app hostname>/forum and you should see a brand new forum.