var elixir = require('laravel-elixir');

var base_path = './vendor/bower_components/';
var paths = {
    'jquery': base_path + 'jquery/',
    'bootstrap': base_path + 'bootstrap-sass-official/assets/',
    'bootswatch': base_path + 'bootswatch-sass/',
    'bootstrapmd': base_path + 'bootstrap-markdown/'
}

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix
        .sass('app.scss', 'public/css/', {includePaths: [paths.bootstrap + 'stylesheets/', paths.bootswatch]})
        .copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts')
        .copy(paths.bootstrapmd + 'css/bootstrap-markdown.min.css', 'public/css')
        .styles([
            "./public/css/app.css",
            paths.bootstrapmd + "css/bootstrap-markdown.min.css"
        ], 'public/css/all.css', './')
        .scripts([
            paths.jquery + 'dist/jquery.js',
            paths.bootstrap + 'javascripts/bootstrap.js',
            paths.bootstrapmd + 'js/bootstrap-markdown.js',
        ], 'public/js/all.js', './')
        .version(['css/all.css', 'js/all.js']);
});
