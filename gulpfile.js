"use strict" 
var gulp = require('gulp'); //task runner
var connect = require('gulp-connect'); // Runs a local dev server
var history = require('connect-history-api-fallback'); //middleware to proxy request through a specified index page
var open = require('gulp-open'); //Open a Url in a web browser
var browserify = require('browserify'); //Bundle JS
//var reactify = require('reactify'); //Transforms React JSX to JS
var source = require('vinyl-source-stream');  //Use conventional text stream with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //lint JS files
var babelify = require('babelify'); //transpiler es6
//var sourcemaps = require('gulp-sourcemaps');
//var buffer = require('vinyl-buffer');

var config = {
  port: 8888,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    //I might need the sass pluggin here
    css: ['./src/*.css','./node_modules/react-input-calendar/styles/input-calendar.css'],
    dist: './dist',
    mainJs: './src/main.js'
  }
};

//Start a local dev server
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true,
    middleware: function(connect, opt) {
      return [history()];
    }
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src ('dist/index.html')
      .pipe(open({uri: config.devBaseUrl + ":" + config.port + '/'}))
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(connect.reload());
});

gulp.task('js', function() {//presets so we have access to the spread operator
  browserify(config.paths.mainJs, {debug: true})
    .transform(babelify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
   // .pipe(buffer())
   // .pipe(sourcemaps.init({loadMaps: true}))
   // .pipe(sourcemaps.write('./src'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist + '/css'))
});

gulp.task('lint', function() {
  return gulp.src(config.paths.js)
             .pipe(lint({config: 'eslint.config.json'}))
             .pipe(lint.format());
});

gulp.task('watch', function() {
   gulp.watch(config.paths.html, ['html']);
   gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'css', 'js', 'lint', 'open', 'watch']);
