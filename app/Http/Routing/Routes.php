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
$router->get('blog/posts', ['as' => 'blog.list', 'uses' => 'BlogController@_list']);
$router->get('blog', ['as' => 'blog.index', 'uses' => 'BlogController@index']);
$router->get('blog/tag/{tag}', ['as' => 'blog.tag.index', 'uses' => 'BlogController@index']);
$router->get('blog/archive/{year}/{month?}', ['as' => 'blog.archive.index', 'uses' => 'BlogController@archive']);
$router->get('blog/{year}/{id}-{slug}', ['as' => 'blog.post.show', 'uses' => 'BlogController@show']);

// Pages
$router->resource('pages', 'PageController');
$router->get('pages', ['as' => 'pages.list', 'uses' => 'PageController@_list']);
$router->get('{slug}', ['as' => 'pages.show', 'uses' => 'PageController@show'])->where('slug', '(.*)');
