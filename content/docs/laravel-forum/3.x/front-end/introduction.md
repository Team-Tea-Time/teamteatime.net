---
layout: "docs"
projects: "Laravel Forum"
versions: "3.x"
topics: "02:Front-end"
title: "Introduction"
url: "/docs/laravel-forum/3.x/front-end/"
weight: 1
---

## Introduction

[laravel-forum-frontend](https://github.com/Riari/laravel-forum-frontend) is an optional package that provides a set of standard routes, controllers and Blade views for the forum. For most users, this is the easiest way of getting a front-end up and running on a fresh install of laravel-forum; it's written with Bootstrap 3 in mind and only requires some view overrides to integrate with existing designs.

However, if your application doesn't use the Blade template engine or you otherwise want to build out your own front-end, the [API](/docs/laravel-forum/3.x/api/) makes that straightforward and includes an [internal dispatcher](/docs/laravel-forum/3.x/api/internal-dispatching/) for easy consumption in your application code rather than over HTTP.
