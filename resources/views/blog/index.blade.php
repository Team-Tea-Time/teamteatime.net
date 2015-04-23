@extends('layouts.default')

@section('title', 'Blog')

@section('splash')
<h1>Tea Time Blog</h1>
@stop

@section('content')
@if(isset($year) || isset($tag))
<p><a href="/blog">&laquo; Blog index</a></p>

@if(isset($year))
<h2>Showing posts from @if(!is_null($month)){{ $month }} @endif{{ $year }}</h2>
@endif

@if(isset($tag))
<h2>Browsing all <em>{{ $tag }}</em> posts</h2>
@endif
@endif

@if(Auth::check())
<div class="row">
    <div class="col-xs-12 text-right">
        <a class="btn btn-success" href="{{ URL::route('blog.post.create') }}"><i class="fa fa-plus fa-fw"></i> New Post</a>
    </div>
</div>
<hr>
@endif

<div class="row">
    <div class="col-md-8">
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
        <div class="clearfix"></div>
        @include('partials.pagination', ['items' => $posts])
    </div>
    <div class="col-md-4 text-right">
        @if(isset($archive))
        <h3>Archive</h3>
        <ul class="list-unstyled">
            @foreach($archive as $link)
            <li><a href="{{ URL::route('blog.archive.index', ['year' => $link->year, 'month' => $link->month]) }}">{{ $link->month_name }} {{ $link->year }}</a> <span class="text-muted">({{ $link->post_count }})</span></li>
            @endforeach
        </ul>
        @endif

        @if(isset($tags))
        <h3>Tags</h3>
        @foreach($tags as $tag)
        <a href="{{ URL::route('blog.tag.index', ['tag' => $tag->slug]) }}" class="label label-primary">{{ $tag->name }}</a>
        @endforeach
        @endif
    </div>
</div>
@stop

@if(Auth::check())
@section('bottom')
@foreach($posts as $post)
@include('blog.delete', ['id' => "delete-post-{$post->id}"])
@endforeach
@stop
@endif
