var elixir = require('laravel-elixir');

var base_path = './vendor/bower_components/';
var paths = {
    'jquery': base_path + 'jquery/',
    'bootstrap': base_path + 'bootstrap-sass-official/assets/',
    'bootswatch': base_path + 'bootswatch-sass/',
    'bootstrapmd': base_path + 'bootstrap-markdown/',
    'bootstraptypeahead': base_path + 'bootstrap3-typeahead/',
    'bootstraptagsinput': base_path + 'bootstrap-tagsinput/',
    'fontawesome': base_path + 'fontawesome/',
    'marked': base_path + 'marked/',
    'tomarkdown': base_path + 'to-markdown/'
}

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix
        .sass('app.scss', 'public/css/', {includePaths: [paths.bootstrap + 'stylesheets/', paths.bootswatch, paths.fontawesome + 'scss/']})
        .copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts')
        .copy(paths.bootstrapmd + 'css/bootstrap-markdown.min.css', 'public/css')
        .copy(paths.fontawesome + 'fonts/**', 'public/fonts')
        .styles([
            './public/css/app.css',
            paths.bootstrapmd + 'css/bootstrap-markdown.min.css',
            paths.bootstraptagsinput + 'dist/bootstrap-tagsinput.css',
        ], 'public/css/all.css', './')
        .scripts([
            paths.jquery + 'dist/jquery.js',
            paths.bootstrap + 'javascripts/bootstrap.js',
            paths.bootstrapmd + 'js/bootstrap-markdown.js',
            paths.bootstraptypeahead + 'bootstrap3-typeahead.min.js',
            paths.bootstraptagsinput + 'dist/bootstrap-tagsinput.js',
            paths.marked + 'lib/marked.js',
            paths.tomarkdown + 'src/to-markdown.js'
        ], 'public/js/all.js', './')
        .version(['css/all.css', 'js/all.js']);
});
