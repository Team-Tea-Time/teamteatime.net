---
title: "Upgrading"
order: 3
---

### From version 2

Upgrading from version 2 is possible using the [standard installation steps](/docs/laravel-forum/3/installation/). Before you start, you *must* move any published forum config and views out of your project; this will make way for new versions of the files. Without doing this, you may run into errors when the package attempts to load old files with naming conventions matching new ones.

Once you've done that and completed the standard installation, you should have up to date schema and all of the new config, translation and view files. You'll need to go through those to make any necessary changes for your project.

### From version 1

Upgrading from version 1 is unsupported due to major differences in the package architecture and the supported Laravel versions. If you want to tackle this anyway, start by following the [Laravel upgrade guide](https://laravel.com/docs/5.1/upgrade) to upgrade your project to Laravel 5.1; you can then upgrade laravel-forum to the latest 2 release via composer and manually adjust your schema, views and config to match the new versions.

Once that's complete, you can move onto upgrading from version 2.
