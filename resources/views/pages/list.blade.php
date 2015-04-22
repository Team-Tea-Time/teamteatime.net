@extends('layouts.default')

@section('title', 'Pages')

@section('splash')
<h1><i class="fa fa-files-o fa-fw"></i> Pages</h1>
@stop

@section('content')
<div class="row">
    <div class="col-xs-12">
        <a class="btn btn-success" href="{{ URL::route('pages.create') }}"><i class="fa fa-plus fa-fw"></i> New Page</a>
    </div>
</div>
<hr>
<div class="table-responsive">
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Title</th><th>Slug</th><th>Created by</th><th>Last updated</th><th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($pages as $page)
            <tr>
                <td><a href="{{ $page->route }}">{{ $page->title }}</a></td>
                <td>{{ $page->slug }}</td>
                <td>{{ $page->owner->name }} ({{ $page->owner->email }}) ({{ $page->createdAgo }})</td>
                <td>{{ $page->updatedAgo }}</td>
                <td>
                    <a href="{{ $page->editRoute }}">Edit</a>
                    <a href="#delete-page-{{ $page->id }}" data-toggle="modal" data-target="#delete-page-{{ $page->id }}">Delete</a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@include('partials.pagination', ['items' => $pages])
@stop

@section('bottom')
@foreach($pages as $page)
@include('pages.delete', ['id' => "delete-page-{$page->id}"])
@endforeach
@stop
