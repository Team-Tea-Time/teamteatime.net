---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "01:Web"
title: "Views"
weight: 1
---

## Views

Views are published to `resources/views/vendor/forum`. The simplest way to integrate the forum with your existing design is to edit the **master** view, remove undesired markup and make it extend your application's main layout with `@extends`. Note that the master view does pull in Bootstrap 5, Vue.js and some other JS libraries by default, and includes some Vue-based JavaScript to support some of the frontend features. You may wish to move it elsewhere or re-write it in your own way.
