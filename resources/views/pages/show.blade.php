@extends('layouts.default')

@section('title', $page->title)

@section('splash')
<h1>{{ $page->title }}</h1>
@if(Auth::check())
<span>
    <strong>Created by {!! $page->owner->name !!}</strong> {!! $page->createdAgo !!}.
    @if($page->created_at != $page->updated_at)
    Last updated {!! $page->updatedAgo !!}.
    @endif
</span>
@endif
@stop

@section('content')
    @if(Auth::check())
        <div class="col-xs-12">
            <div class="pull-right">
                <a class="btn btn-info" href="{!! URL::route('pages.edit', array('pages' => $page->id)) !!}"><i class="fa fa-pencil-square-o"></i> Edit Page</a>
                <a class="btn btn-danger" href="#delete-page" data-toggle="modal" data-target="#delete-page"><i class="fa fa-times"></i> Delete Page</a>
            </div>
        </div>
        <hr>
    @endif
    {!! $page->content !!}
@stop

@if(Auth::check())
@section('bottom')
    @include('pages.delete')
@stop
@endif
