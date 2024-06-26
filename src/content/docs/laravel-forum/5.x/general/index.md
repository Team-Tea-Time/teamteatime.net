---
title: "Introduction"
order: 0
---

Laravel Forum 5 is a total rewrite of the package with the same philosophy at its core: a simple and robust forum package designed for quick and easy integration into Laravel projects. It serves as a solid foundation for building bespoke discussion forums without being too opinionated, making as few assumptions as possible about your application while leaving the more subjective features and functionality (such as file attachments and WYSIWYG editors) up to you to implement and configure as you see fit.

If you're looking for a more feature-complete forum solution built on Illuminate (the collection of components that power Laravel), take a look at [Flarum](http://flarum.org/) as an alternative.

### Source

The repository is hosted on GitHub at [https://github.com/Team-Tea-Time/laravel-forum](https://github.com/Team-Tea-Time/laravel-forum).

### Demo

You can view a simple demo of version 5 online at [https://laravel-forum.teamteatime.net/](https://laravel-forum.teamteatime.net/). The demo source is available at [https://github.com/Team-Tea-Time/laravel-forum-demo](https://github.com/Team-Tea-Time/laravel-forum-demo).

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
