---
layout: "docs"
projects: "Laravel Forum"
versions: "4"
topics: "02:Front-end"
title: "Installation"
weight: 3
---

## Installation

### Step 1: Install the package

Install the package via composer:

```
composer require riari/laravel-forum-frontend:~1.0
```

Then add the service provider to your `config/app.php`:

```php
Riari\Forum\Frontend\ForumFrontendServiceProvider::class,
```

### Step 2: Publish the package files

Run the vendor:publish command to publish the package config and views to your app's directories:

`php artisan vendor:publish`

---

That's it; refer to [configuration](/docs/laravel-forum/4/front-end/configuration/) or [management](/docs/laravel-forum/4/front-end/management/) for further steps.
