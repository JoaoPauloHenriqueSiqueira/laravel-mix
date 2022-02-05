const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/front/app.js', 'public/js/front.js')
    .js('resources/js/admin/app.js', 'public/js/admin.js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    // .copy('resources/assets/img/photo.txt','public/p.txt')
    // .copyDirectory('resources/assets/img','public/img')
    .scripts([
        'resources/js/arquivo1.js',
        'resources/js/arquivo2.js'
    ],'public/js/all.js')
    .styles([
        'resources/css/arquivo1.css',
        'resources/css/arquivo2.css'
    ],'public/css/all.css')
    .extract(['vue'])
    .browserSync('localhost/laravel-mix/public');

    if(mix.inProduction()){
        mix.version();
    }

