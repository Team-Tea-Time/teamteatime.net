---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "00:General"
title: "Upgrading"
weight: 4
---

## Upgrading

Since version 5 is a total rewrite, upgrading from prior versions is not officially supported. However, as it builds on the database migrations from prior versions, upgrading should be possible with a fresh set of config and views.

If you wish to attempt the upgrade, you should first remove any Laravel Forum config, translation, and view files from your project, then follow the [installation steps](/docs/laravel-forum/5/installation/).

After completing those steps, your database schema should be up-to-date and you can reinstate any config options you'd like to keep. If you customised your views, you'll need to start fresh with the new ones as the markup has changed considerably from previous versions.

You should also review any Policy overrides you have, as some new abilities are introduced by version 5.
