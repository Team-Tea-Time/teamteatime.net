@extends(Config::get('core.default'))

@section('title')
Blog
@stop

@section('top')
<h1>Tea Time Blog</h1>
@stop

@section('content')
<div class="row">
    @auth('blog')
        <div class="col-xs-12 text-right">
            <a class="btn btn-primary" href="{!! URL::route('blog.posts.create') !!}"><i class="fa fa-book"></i> New Post</a>
        </div>
    @endauth
</div>
@foreach($posts as $post)
    <h2><a href="">{!! $post->title !!}</a></h2>
    <p>
        <strong>{!! $post->summary !!}</strong>
    </p>
    <p>
        <a class="btn btn-success" href="{!! $post->route !!}"><i class="fa fa-file-text"></i> Show Post</a>
        @auth('blog')
             <a class="btn btn-info" href="{!! $post->editRoute !!}"><i class="fa fa-pencil-square-o"></i> Edit Post</a> <a class="btn btn-danger" href="#delete_post_{!! $post->id !!}" data-toggle="modal" data-target="#delete_post_{!! $post->id !!}"><i class="fa fa-times"></i> Delete Post</a>
        @endauth
    </p>
    <br>
@endforeach
{!! $links !!}
@stop

@section('bottom')
@auth('blog')
    @include('posts.deletes')
@endauth
@stop
