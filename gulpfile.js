var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var allJsFiles = [
  './*.js',
  './examples/*.js'
];

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('jshint', function() {
  return gulp.src(allJsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function () {
  return gulp.src(allJsFiles)
    .pipe(jscs())
    .pipe(jscs.reporter());
});
