{!! Form::open(['url' => $form['url'], 'method' => $form['method'], 'class' => 'form-horizontal']) !!}
    <div class="form-group{!! ($errors->has('title')) ? ' has-error' : '' !!}">
        <label class="col-md-2 col-sm-3 col-xs-10 control-label" for="title">Title</label>
        <div class="col-lg-3 col-md-4 col-sm-5 col-xs-10">
            <input name="title" id="title" value="{!! Request::old('title', $form['defaults']['title']) !!}" type="text" class="form-control" placeholder="Page Title">
            {!! ($errors->has('title') ? $errors->first('title') : '') !!}
        </div>
    </div>

    <div class="form-group{!! ($errors->has('slug')) ? ' has-error' : '' !!}">
        <label class="col-md-2 col-sm-3 col-xs-10 control-label" for="slug">Slug</label>
        <div class="col-lg-3 col-md-4 col-sm-5 col-xs-10">
            <input name="slug" id="slug" value="{!! Request::old('slug', $form['defaults']['slug']) !!}" type="text" class="form-control" placeholder="Page Slug">
            {!! ($errors->has('slug') ? $errors->first('slug') : '') !!}
        </div>
    </div>

    <div class="form-group{!! ($errors->has('content')) ? ' has-error' : '' !!}">
        <label class="col-md-2 col-sm-3 col-xs-10 control-label" for="content">Content</label>
        <div class="col-lg-6 col-md-8 col-sm-9 col-xs-12">
            <textarea name="content" id="content" class="form-control" placeholder="Page content" rows="8">{!! Request::old('content', $form['defaults']['content']) !!}</textarea>
            {!! ($errors->has('content') ? $errors->first('content') : '') !!}
        </div>
    </div>

    <div class="form-group">
        <div class="col-md-offset-2 col-sm-offset-3 col-sm-10 col-xs-12">
            <button class="btn btn-primary" type="submit"><i class="fa fa-rocket"></i> {!! $form['button'] !!}</button>
            <a href="/pages" class="btn btn-default pull-right">Cancel</a>
        </div>
    </div>
{!! Form::close() !!}
