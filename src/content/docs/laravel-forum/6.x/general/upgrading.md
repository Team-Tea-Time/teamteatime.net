---
title: "Upgrading"
order: 3
---

You can upgrade from 5.x to 6.x by following the steps below. Before you begin, you must upgrade your application to Laravel 11 or higher. See the [Laravel 11 upgrade guide](https://laravel.com/docs/11.x/upgrade) for details.

## Step 1: Update the package version

Run the following to update the package version from 5.x to 6.x:

```
composer require riari/laravel-forum:^6.0
```

## Step 2: Publish the package files

Run the vendor:publish command to publish the package config, translations and migrations to your app's directories:

```
php artisan vendor:publish
```

At this point, you may need to migrate some old config values to the newly published config files. They have changed as follows:

| Old                           | New                           |
|-------------------------------|-------------------------------|
| config/forum.api.php          | config/forum/api.php          |
| config/forum.web.php          | config/forum/frontend.php     |
| config/forum.general.php      | config/forum/general.php      |
| config/forum.integration.php  | config/forum/integration.php  |

You should check the new config files for any values you need to modify, then delete the old config files.

## Step 3: Update your database

Run your migrations:

```
php artisan migrate
```

## Step 4: Install a UI preset

Run the following to choose and install a UI preset:

```
php artisan forum:preset-install
```

See [UI Presets](/docs/laravel-forum/6.x/front-end/ui-presets) for more details.

Note that the old presets have been renamed; `bootstrap` is now `blade-bootstrap` and `tailwind` is now `blade-tailwind`. Additionally, they have been updated to manage their dependencies via NPM and now require Vite to work with by default.

Once you have installed a preset, you can find it in your application's `resources/forum` directory. You should apply any changes you need to integrate the forum front-end with your application, including carrying over any changes you made in the old forum views. In particular, you should look at the main layout file for your chosen preset: `resources/forum/[preset]/views/layouts/main.blade.php`.

After completing that step, you should remove the `resources/views/vendor/forum` directory as it's no longer used by the package.

## Step 5: Update policies

Although the package policies are largely the same as before, there are a few changes that you may need to accommodate in any policy overrides you've done. The exact changes are outlined below.

### ForumPolicy

**Added**

* `editCategories`
* `deleteCategories`

**Removed**

* `manageCategories`
* `renameCategories`

### CategoryPolicy

**Added**

* `edit`

**Removed**

* `enableThreads`

### ThreadPolicy

No changes.

### PostPolicy

No changes.