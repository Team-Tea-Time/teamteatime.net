---
title: "Helpers"
order: 12
---

The front-end makes use of a utility class (specified in the `forum.frontend.utility_class` config value) to facilitate a few common actions. This is automatically aliased to `Forum` for ease of use in views.

### Alert

```
Forum::alert('success', 'categories.updated', $categories->count());
```

Flashes alert messages to the session to be displayed on the next request. Note that validation messages are independent of this and follow [Laravel's convention](http://laravel.com/docs/5.1/validation#working-with-error-messages); in this context, alerts are forum-specific 'success' or 'warning' messages.

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

Wraps Laravel's `route()` helper function to generate URLs for forum routes. Since forum front-end routes contain many parameters, generating URLs for them with `route()` can be cumbersome, especially in views. To make this easier, `Forum::route()` simply accepts a route name (with or without the preceding `forum.`) and a `Category`, `Thread` or `Post` model. The route parameters are automatically extracted from the model.

### Routes

```
Forum::routes(Router $router);
```

Defines all of the standard routes. By default, if `forum.routing.enabled` is true, this is automatically called inside a route group with 'prefix', 'as' and 'middleware' set to `forum.routing.prefix`, `forum.routing.as` and `forum.frontend.middleware` respectively.

> Tip: You can disable routing and call this in your own route definitions if you prefer; just remember to set the 'as' property of any forum route group you define to `forum.routing.as`, otherwise `Forum::route()` may be unable to identify forum routes correctly.


### Slugify

```
Forum::slugify($title);
```

Generates a URL-friendly version of the given string. By default, this simply passes the string through Laravel's `str_slug()` and is used by `Forum::route()`. You'll probably want to override this if your forum is going to contain categories and threads with unicode titles.
