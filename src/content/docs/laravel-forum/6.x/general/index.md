---
title: "Introduction"
order: 0
---

Aside from compatibility with Laravel 11, Laravel Forum 6 comes with a number of improvements such as a more robust iteration of the UI presets feature introduced in 5.6.0. It also ships with a brand new Livewire integration and accompanying Tailwind-styled UI preset.

This version continues the philosophy of previous ones: a lean foundation for building forums on top of Laravel.

If you're looking for a more feature-complete forum solution built on Illuminate (the collection of components that power Laravel), take a look at [Flarum](http://flarum.org/) as an alternative.

Another alternative is [Waterhole](https://waterhole.dev/) (although it's not free, but it comes with many more features than Laravel Forum).

### Source

The repository is hosted on GitHub at [https://github.com/Team-Tea-Time/laravel-forum](https://github.com/Team-Tea-Time/laravel-forum).

### Demo

You can view a simple demo of version 6 online at [https://laravel-forum.teamteatime.net/](https://laravel-forum.teamteatime.net/). The demo source is available at [https://github.com/Team-Tea-Time/laravel-forum-demo](https://github.com/Team-Tea-Time/laravel-forum-demo).

There are three users available, all of which can create threads and posts (replies), but have some differences in their permissions:

#### DemoUser
+ Cannot create or manage categories
+ Cannot view private categories
+ Cannot use any moderation features

#### DemoModerator
+ Cannot create or manage categories
+ Cannot view private categories
+ Can use moderation features

#### DemoAdmin
+ Can create and manage categories
+ Can view private categories
+ Can use moderation features
