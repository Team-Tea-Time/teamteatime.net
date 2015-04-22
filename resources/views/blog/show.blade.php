@extends('layouts.default')

@section('title', $post->title)

@section('splash')
<h1>{{ $post->title }}</h1>
<span>
    <strong>Written by {!! $post->owner->name !!}</strong> {!! $post->createdAgo !!}.
    @if($post->created_at != $post->updated_at)
    Last updated {!! $post->updatedAgo !!}.
    @endif
</span>
@stop

@section('content')
<div class="col-md-8 col-md-offset-2">
    @if(Auth::check())
        <div class="text-right">
            <a class="btn btn-info" href="{{ $post->editRoute }}"><i class="fa fa-pencil-square-o"></i> Edit Post</a>
            <a class="btn btn-danger" href="#delete-post" data-toggle="modal" data-target="#delete-post"><i class="fa fa-times"></i> Delete Post</a>
        </div>
        <hr>
    @endif

    @if($post->tagNames())
    <p class="text-center">
        @foreach($post->tagNames() as $tag)
        <span class="label label-default">{{ $tag }}</span>
        @endforeach
    </p>
    @endif

    {!! $post->bodyParsed !!}
</div>
@stop

@if(Auth::check())
@section('bottom')
    @include('blog.delete')
@stop
@endif
