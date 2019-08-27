---
layout: "docs"
projects: "Laravel Forum"
versions: "4.x"
topics: "03:API"
title: "Introduction"
url: "/docs/laravel-forum/4.x/api/"
weight: 1
---

## Introduction

[laravel-forum 3.x](https://github.com/Riari/laravel-forum) provides a RESTful API that can be consumed over HTTP or [internally](/docs/laravel-forum/4.x/api/internal-dispatching/). It supports multiple [authentication](/docs/laravel-forum/4.x/api/authentication/) methods and offers endpoints for creating, querying, modifying and deleting [categories](/docs/laravel-forum/4.x/api/categories/), [threads](/docs/laravel-forum/4.x/api/threads/) and [posts](/docs/laravel-forum/4.x/api/posts/).

### Responses

Much like Laravel itself, responses returned by the API depend on the request context; internal requests can expect untouched collections and models (or an exception thrown in case of failed authorization, failed validation or "not found" responses), while requests over HTTP can expect a JSON-formatted collection, model or error code and message.

Take a look at [laravel-forum-frontend](https://github.com/Riari/laravel-forum-frontend) to get an idea of how responses can be used internally.
