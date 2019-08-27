---
layout: "docs"
projects: "Laravel Forum"
versions: "3.x"
topics: "03:API"
title: "Internal Dispatching"
weight: 7
---

## Internal Dispatching

[laravel-forum 3.x](https://github.com/Riari/laravel-forum) enables dispatching requests to the API from any part of your application. The dispatcher consists of two parts; the dispatcher class itself and a 'receiver' interface to ensure proper response handling.

The dispatcher is available at `Riari\Forum\API\Dispatcher` and should be instantiated with the class that will handle responses from it:

```
$dispatcher = new \Riari\Forum\API\Dispatcher($receiver);
```

In this case, `$receiver` should be an instance of a class implementing `\Riari\Forum\Contracts\API\ReceiverContract` and should contain the following method:

```
    /**
     * Handle a response from the dispatcher for the given request.
     *
     * @param  Request  $request
     * @param  Response  $response
     * @return Response|mixed
     */
    public function handleResponse(Request $request, Response $response)
    {
        //
    }
```

As an example, the optional [front-end](/docs/laravel-forum/3.x/front-end/) package uses the following:

```
    /**
     * Handle a response from the dispatcher for the given request.
     *
     * @param  Request  $request
     * @param  Response  $response
     * @return Response|mixed
     */
    public function handleResponse(Request $request, Response $response)
    {
        if ($response->getStatusCode() == 422) {
            $errors = $response->getOriginalContent()['validation_errors'];
            throw new HttpResponseException(
                redirect()->back()->withInput($request->input())->withErrors($errors)
            );
        }
        return $response->isNotFound() ? abort(404) : $response->getOriginalContent();
    }
```

This ensures validation errors and 404s are handled appropriately.
