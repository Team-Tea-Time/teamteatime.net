@extends('layouts.default')

@section('title', "Edit {$post->title}")

@section('splash')
<h1>{{ $post->title }}</h1>
<span>You're editing this post</span>
@stop

@section('content')
<div class="row">
    <div class="col-xs-12 text-right">
        <a class="btn btn-success" href="{{ $post->route }}"><i class="fa fa-file-text"></i> View Post</a> <a class="btn btn-danger" href="#delete-post" data-toggle="modal" data-target="#delete-post"><i class="fa fa-times"></i> Delete Post</a>
    </div>
</div>
<hr>
<div class="well">
    <?php
    $form = ['url' => URL::route('blog.post.update', ['post' => $post->id]),
        'method' => 'PATCH',
        'button' => 'Save post',
        'defaults' => [
            'title' => $post->title,
            'body' => $post->body,
            'tags' => $post->tagList
    ], ];
    ?>
    @include('blog.form')
</div>
@stop

@section('bottom')
@include('blog.delete')
@stop
