@extends('layouts.default')

@section('splash')
<h1>{{ $page->title }}</h1>
<span><strong>Created by {!! $page->owner->name !!}</strong> {!! $page->createdAgo !!}. Last updated {!! $page->createdAgo !!}.</span>
@stop

@section('content')
    @if(Auth::check())
        <div class="col-xs-12">
            <div class="pull-right">
                <a class="btn btn-info" href="{!! URL::route('pages.edit', array('pages' => $page->id)) !!}"><i class="fa fa-pencil-square-o"></i> Edit Page</a>
                <a class="btn btn-danger" href="#delete_page" data-toggle="modal" data-target="#delete_page"><i class="fa fa-times"></i> Delete Page</a>
            </div>
        </div>
    @endif
    <hr>
    {!! $page->content !!}
@stop

@if(Auth::check())
@section('bottom')
    @include('pages.delete')
@stop
@endif
