---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "00:General"
title: "Actions"
weight: 7
---

## Actions

Laravel Forum 5 uses single-action classes to carry out the specific actions associated with requests, such as creating a thread or deleting a post. When an action is executed, its database queries are wrapped in a transaction for easy rollback in case of a failure.

For a full list of actions, see their definitions in [src/Actions](https://github.com/Team-Tea-Time/laravel-forum/tree/5.0/src/Actions).

> If you wish to use forum features programmatically server-side, using actions is a good option - just keep in mind that they do not dispatch [events](/docs/laravel-forum/5/web/events/) because that responsibility is taken care of by the form requests and controllers instead.