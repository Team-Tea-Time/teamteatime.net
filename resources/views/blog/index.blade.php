@extends('layouts.default')

@section('title', 'Blog')

@section('splash')
<h1>Tea Time Blog</h1>
@stop

@section('content')
@if(Auth::check())
<div class="row">
    <div class="col-xs-12 text-right">
        <a class="btn btn-success" href="{{ URL::route('blog.post.create') }}"><i class="fa fa-plus fa-fw"></i> New Post</a>
    </div>
</div>
<hr>
@endif
@foreach($posts as $post)
    <h2><a href="{{ $post->route }}">{!! $post->title !!}</a></h2>
    <p class="text-muted">
        Posted by {{ $post->owner->name }} {{ $post->createdAgo }}
        @if($post->created_at != $post->updated_at)
        (last updated {{ $post->updatedAgo }})
        @endif
    </p>
    {!! $post->summary !!}
    <hr>
    @if(Auth::check())
    <div class="pull-right">
        <ul class="list-inline">
            <li><a href="{!! $post->editRoute !!}">Edit Post</a></li>
            <li><a class="text-danger" href="#delete-post-{!! $post->id !!}" data-toggle="modal" data-target="#delete-post-{!! $post->id !!}">Delete Post</a></li>
        </ul>
    </div>
    @endif
    <a href="{{ $post->route }}">View post &raquo;</a>
@endforeach
@include('partials.pagination', ['items' => $posts])
@stop

@if(Auth::check())
@section('bottom')
@foreach($posts as $post)
@include('blog.delete', ['id' => "delete-post-{$post->id}"])
@endforeach
@stop
@endif
