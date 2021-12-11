---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "00:General"
title: "Commands"
weight: 8
---

## Commands

### Seed

```
php artisan forum:seed
```

Seed the forum tables with example categories, content, and a user (to assign as author of the content). You can run this multiple times to generate more data.

### Sync stats

```
php artisan forum:sync
```

Synchronize forum category and thread statistics. Available options:

* `--model=`: Limit the process to a specific model (`Category` or `Thread`).
* `--range=`: Limit the process to a specific range in the format `skip:take` (e.g. `10:50` would skip 10 rows and take 50). Useful for batching on a large forum.

> Using this command should not be necessary with ordinary use of the forum; it's designed to correct errors inadvertently caused by bugs or modifications.