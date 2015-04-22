@extends('layouts.default')

@section('title')
Create Post
@stop

@section('splash')
<h1>Create Post</h1>
@stop

@section('content')
<div class="well">
    <?php
    $form = ['url' => URL::route('blog.post.store'),
        'method' => 'POST',
        'button' => 'Create New Post',
        'defaults' => [
            'title' => '',
            'summary' => '',
            'body' => '',
            'tags' => ''
    ], ];
    ?>
    @include('blog.form')
</div>
@stop
