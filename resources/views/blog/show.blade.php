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
<div id="blog-post" class="col-md-8 col-md-offset-2">
    @if(Auth::check())
        <div class="text-right">
            <a class="btn btn-info" href="{{ $post->editRoute }}"><i class="fa fa-pencil-square-o"></i> Edit Post</a>
            <a class="btn btn-danger" href="#delete-post" data-toggle="modal" data-target="#delete-post"><i class="fa fa-times"></i> Delete Post</a>
        </div>
        <hr>
    @endif

    @if(!empty($post->tagged))
    <p class="text-center">
        <i class="fa fa-tags fa-fw middle text-muted"></i>
        @foreach($post->tagged as $tag)
        <a href="{{ URL::route('blog.tag.index', ['tag' => $tag->tag_slug]) }}" class="label label-primary">{{ $tag->tag_name }}</a>
        @endforeach
    </p>
    @endif

    <div class="body">
        {!! $post->bodyParsed !!}
    </div>

    <hr>

    <div id="disqus_thread"></div>
    <script type="text/javascript">
        /* * * CONFIGURATION VARIABLES * * */
        var disqus_shortname = 'team-tea-time';

        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
</div>
@stop

@if(Auth::check())
@section('bottom')
    @include('blog.delete')
@stop
@endif
