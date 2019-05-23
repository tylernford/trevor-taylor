let mix = require('laravel-mix');

let tailwindcss = require('tailwindcss');

require('laravel-mix-purgecss');

mix.sass('resources/sass/app.scss', 'assets/css/app.css')
   .options({
      processCssUrls: false,
      postCss: [tailwindcss('tailwind.config.js')],
      autoprefixer: {
         options: {
            browsers: ['last 3 versions']
         }
      },
   })
   .copyDirectory('resources/js', 'assets/js')
   .copyDirectory('resources/fonts', 'assets/fonts')
   .copyDirectory('resources/img', 'assets/img')
   //.js([
   //   'js/app.js',
   //], 'js/app.min.js');

//mix.disableSuccessNotifications();

if (mix.inProduction()) {
    mix.purgeCss({
        enabled: true,
        globs: [
            path.join(__dirname, 'layouts/*.html'),
            //path.join(__dirname, 'templates/*.html'),
            //path.join(__dirname, 'templates/**/*.html'),
            //path.join(__dirname, 'partials/*.html'),
            //path.join(__dirname, 'partials/**/*.html'),
            path.join(__dirname, 'js/**.js'),
            path.join(__dirname, 'img/**.svg'),
        ],
        extensions: ['html', 'js', 'php', 'svg'],
    })
};