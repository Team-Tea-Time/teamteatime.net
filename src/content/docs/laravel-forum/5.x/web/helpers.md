---
title: "Helpers"
order: 11
---

Laravel Forum provides a utility class (specified in the `forum.web.utility_class` config value, `TeamTeaTime\Forum\Support\Web\Forum::class` by default) to facilitate a few common actions. This is automatically aliased to `Forum` for ease of use in views.

`TeamTeaTime\Forum\Support\Api\ForumApi::class` is also available and provides a `route` method, similar to the `Forum` one described below, for generating API URLs. Note that this class does not get aliased automatically.

### Alert

```
Forum::alert('success', 'categories.updated', $categories->count());
```

Flashes alert messages to the session to be displayed on the next request. Note that validation messages, which follow [Laravel's convention](https://laravel.com/docs/8.x/validation#working-with-error-messages) are separate from this feature; in this context, alerts are forum-specific 'success' or 'warning' messages.

### Render

```
Forum::render($post->content);
```

Parses the given content and returns the "rendered" version. This is used for post content by default, but could extend to category descriptions.

### Route

```
Forum::route('forum.index');
Forum::route('thread.show', $thread);
```

Wraps Laravel's `route()` helper function to generate URLs for forum routes. Since the web routes contain many parameters, generating URLs for them with `route()` can be cumbersome, especially in views. To make this easier, `Forum::route()` simply accepts a route name (with or without the preceding `forum.`) and a `Category`, `Thread` or `Post` model. The route parameters are automatically extracted from the model.

### Slugify

```
Forum::slugify($title);
```

Generates a URL-friendly version of the given string. By default, this simply passes the string through Laravel's `str_slug()` and is used by `Forum::route()`. You'll probably want to override this if your forum is going to contain categories and threads with unicode titles.
