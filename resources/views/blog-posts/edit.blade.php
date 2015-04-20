@extends(Config::get('core.default'))

@section('title')
Edit {{ $post->title }}
@stop

@section('top')
<h1>Edit <em>{{ $post->title }}</em></h1>
@stop

@section('content')
<div class="row">
    <div class="col-xs-6">
        <p class="lead">
            Please edit the post:
        </p>
    </div>
    <div class="col-xs-6">
        <div class="pull-right">
            <a class="btn btn-success" href="{!! URL::route('blog.posts.show', array('posts' => $post->id)) !!}"><i class="fa fa-file-text"></i> Show Post</a> <a class="btn btn-danger" href="#delete_post" data-toggle="modal" data-target="#delete_post"><i class="fa fa-times"></i> Delete Post</a>
        </div>
    </div>
</div>
<hr>
<div class="well">
    <?php
    $form = ['url' => URL::route('blog.posts.update', ['posts' => $post->id]),
        'method' => 'PATCH',
        'button' => 'Save Post',
        'defaults' => [
            'title' => $post->title,
            'summary' => $post->summary,
            'body' => $post->body,
    ], ];
    ?>
    @include('posts.form')
</div>
@stop

@section('bottom')
@auth('blog')
    @include('posts.delete')
@endauth
@stop

@section('css')
{!! HTML::style('//cdnjs.cloudflare.com/ajax/libs/bootstrap-markdown/2.8.0/css/bootstrap-markdown.min.css') !!}
@stop

@section('js')
{!! HTML::script('//cdnjs.cloudflare.com/ajax/libs/bootstrap-markdown/2.8.0/js/bootstrap-markdown.min.js') !!}
@stop
