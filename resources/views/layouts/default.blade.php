<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>{{ Config::get('core.name') }} - @section('title')
@show</title>
@include('partials.header')
</head>
<body>
<div id="wrap">
    @navigation
    <div class="content">
        @if(isset($__env->getSections()['top']))
        <div id="splash">
            <div class="container">
            @section('top')
            @show
            </div>
        </div>
        @endif
        <div class="container">
            @include('partials.notifications')
            @section('content')
            @show
            @include('partials.footer')
            @section('bottom')
            @show
        </div>
    </div>
</div>
</body>
</html>
