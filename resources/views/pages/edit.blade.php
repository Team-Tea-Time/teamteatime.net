@extends('layouts.default')

@section('title', "Edit {$page->title}")

@section('splash')
<h1>{{ $page->title }}</h1>
<span>You're editing this page</span>
@stop

@section('content')
<div class="row">
    <div class="col-xs-12 text-right">
        <a class="btn btn-success" href="{!! URL::route('pages.show', array('pages' => $page->slug)) !!}"><i class="fa fa-file-text"></i> Show Page</a> <a class="btn btn-danger" href="#delete_page" data-toggle="modal" data-target="#delete_page"><i class="fa fa-times"></i> Delete Page</a>
    </div>
</div>
<hr>
<div class="well">
    <?php
    $form = ['url' => URL::route('pages.update', ['pages' => $page->id]),
        'method' => 'PATCH',
        'button' => 'Save Page',
        'defaults' => [
            'title' => $page->title,
            'slug' => $page->slug,
            'content' => $page->content
    ], ];
    ?>
    @include('pages.form')
</div>
@stop

@section('bottom')
    @include('pages.delete')
@stop
