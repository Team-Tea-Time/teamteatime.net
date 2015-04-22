<?php

// Auth
$router->controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

// Homepage
$router->get('/', ['as' => 'index', 'uses' => 'PageController@index']);

// Blog
$router->resource('blog/post', 'BlogController');
$router->get('blog', ['as' => 'blog.index', 'uses' => 'BlogController@index']);
$router->get('blog/posts', ['as' => 'blog.list', 'uses' => 'BlogController@_list']);
$router->get('blog/{year}/{id}-{slug}', ['as' => 'blog.post.show', 'uses' => 'BlogController@show']);

// Pages
$router->resource('pages', 'PageController');
$router->get('pages', ['as' => 'pages.list', 'uses' => 'PageController@_list']);
$router->get('{slug}', ['as' => 'pages.show', 'uses' => 'PageController@show'])->where('slug', '(.*)');
