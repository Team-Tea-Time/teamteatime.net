</div></div>

<div id="footer">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 text-right">
                <p class="text-muted credit">
                    Generated in {{ round((microtime(1) - LARAVEL_START), 4) }} sec.
                </p>
            </div>
        </div>
    </div>
</div>

{!! HTML::script('//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js') !!}
{!! HTML::script('//cdnjs.cloudflare.com/ajax/libs/jquery-timeago/1.4.1/jquery.timeago.min.js') !!}
{!! HTML::script('//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/js/bootstrap.min.js') !!}
{!! Asset::scripts('main') !!}
@section('js')
@show
@if (Config::get('analytics.google'))
    @include('partials.analytics')
@endif
