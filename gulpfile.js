'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var runSeq = require('run-sequence');

var allJsFiles = [
  './*.js',
  './examples/*.js',
];

gulp.task('jshint', function () {
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

gulp.task('lint', function () {
  runSeq('jshint', 'jscs');
});

gulp.task('default', function () {
  runSeq('lint');
});
