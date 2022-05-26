---
layout: "docs"
projects: "Laravel Forum"
versions: "1"
topics: "01:General"
title: "Introduction"
url: "/docs/laravel-forum/1/"
root: true
weight: 1
---

## Introduction

Laravel Forum is a lean Laravel 4 / 5 package that provides an easy to integrate forum solution. Originally based on the [Laravel forum package written by Atrakeur](https://github.com/Atrakeur/laravel-forum), it has grown into a package aimed squarely at developers, with lots of integration options and a solid foundation for building bespoke discussion forums.

It makes as few assumptions as possible about your application and as a general rule, it only contains forum-specific features, leaving some of the more abstract ones (such as file attachments and statistics) to whichever implementations you decide to use. If you're looking for a more feature-complete forum solution, we highly recommend taking a look at [Flarum](http://flarum.org/), which is being built on Laravel.

### Source

The repository is hosted on GitHub at [https://github.com/Riari/laravel-forum](https://github.com/Riari/laravel-forum).

### Project Scope

Laravel Forum is designed to be as lean as possible while still providing a powerful foundation for building forums with minimal effort. As such, certain types of feature won't be considered for future releases; these include text editor integrations (e.g. CKEditor), smiley support and attachments, to name a few. Much like Laravel itself, our philosophy is to avoid making assumptions about the design and purpose of the application, only providing fundamental tools with standard integrations where possible.

This is also the justification behind providing the default front-end as a separate package from 3 onwards; while it should serve the purpose for most, some developers may prefer to build out their own front-ends using popular JS frameworks such as AngularJS and vue.js.

If you want to make a feature suggestion or contribute towards development but aren't sure about the project's scope, feel free to [open an issue](https://github.com/Riari/laravel-forum/issues/new). Even if we can't accept it as an official feature, you can always write a new package listing laravel-forum as a dependency and include your features in that.
