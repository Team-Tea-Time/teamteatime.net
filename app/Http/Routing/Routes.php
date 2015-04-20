<?php

// Homepage
$router->get('/', ['as' => 'index', 'uses' => 'PageController@index']);

// Blog
$router->get('blog', ['as' => 'blog', function () {
    return Redirect::route('blog.posts.index');
}]);
$router->resource('blog/post', 'PostController');
$router->get('blog/{year}/{id}-{slug}', ['as' => 'blog.posts.show', 'uses' => 'PostController@show']);

// Pages
$router->resource('pages', 'PageController');
$router->get('{slug}', ['as' => 'pages.show', 'uses' => 'PageController@show'])->where('slug', '(.*)');

// Auth
$router->controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
