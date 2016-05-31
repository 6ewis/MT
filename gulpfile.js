var gulp = require('gulp'), //task runner
    del = require('del'), //clean previously built code
    less = require('gulp-less'), //compile less code into css files
    cssmin = require('gulp-minify-css'), //minify css files
    browserify = require('browserify'), //let you require node modules in the browser
    uglify = require('gulp-uglify'), //uglify js files
    concat = require('gulp-concat'), //concatenates files
    eslint = require('gulp-eslint'), //lint JS files
    source = require('vinyl-source-stream'), //convert normal text to vinyl stream
    buffer = require('vinyl-buffer'), //convert to a buffered stream which is expected by most gulp tasks
    babelify = require('babelify'), // browserify transform for babel , transpiles es6 to es5
    history = require('connect-history-api-fallback'); //middleware to proxy request through a specified index page
    connect = require('gulp-connect'), //webserver which automatically refresh when code is rebuilt
    open = require('gulp-open'); //Open a Url in a web browser

var config = {
  port: 8888,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: [
        './src/*.css',
        './node_modules/react-input-calendar/styles/input-calendar.css',
        './node_modules/react-widgets/dist/css/*.css'
    ],
    destination: {folder: './dist', css: 'bundle.css', js: 'bundle.js'},
    origin: './src/main.js'
  }
};


/**
 * Cleaning dist/ folder
 */
gulp.task('clean', function(cb) {
  del(['dist/**'], cb);
})

/**
 * Running livereload server
 */
.task('server', function() {
  return connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true,
    middleware: function(connect, opt) {
      return [history()];
    }
  });
})


.task('open', ['server'], function() {
  return gulp.src ('dist/index.html')
  .pipe(open({uri: config.devBaseUrl + ":" + config.port + '/'}))
})


/**
 * html
 */
.task('html', function() {
  return gulp.src(config.paths.html)
  .pipe(gulp.dest(config.paths.destination.folder))
  .pipe(connect.reload());
})

/**
 * Less compilation
 */
.task('less', function() {
  return gulp.src(config.paths.css)
  .pipe(less())
  .pipe(concat(config.paths.destination.css))
  .pipe(gulp.dest(config.paths.destination.folder + '/css'))
  .pipe(connect.reload());

})
.task('less:min', function() {
  return gulp.src(config.paths.css)
  .pipe(less())
  .pipe(concat(config.paths.destination.css))
  .pipe(cssmin())
  .pipe(gulp.dest(config.paths.destination.folder + '/css'))
  .pipe(connect.reload());
})

/**
 * ESLint validation
 */
.task('eslint', function() {
  return gulp.src(config.paths.destination.js)
  .pipe(eslint({config: 'eslint.config.json'}))
  .pipe(eslint.format());
})

/** JavaScript compilation */
.task('js', function() {
  return browserify(config.paths.origin, {debug: true}) //enables source maps
  .transform(babelify)
  .bundle() //bundle into a single js file
  .on('error', console.error.bind(console))
  .pipe(source(config.paths.destination.js))
  .pipe(gulp.dest(config.paths.destination.folder + '/scripts'))
  .pipe(connect.reload());
})
.task('js:min', function() {
  return browserify(config.paths.origin)
  .transform(babelify)
  .bundle()
  .pipe(source(config.paths.destination.js))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest(config.paths.destination.dist + '/scripts'))
  .pipe(connect.reload());
})

/**
 * Compiling resources and serving application
 */

.task('watch', function() {
   gulp.watch(config.paths.html, ['html']);
   gulp.watch(config.paths.js, ['js', 'eslint']);
   gulp.watch(config.paths.js, ['less']);
})

.task('default', ['clean', 'html', 'eslint', 'less', 'js', 'server', 'open', 'watch'])
.task('serve:minified', ['clean', 'html', 'eslint', 'less:min', 'js:min', 'server', 'open', 'watch']);
