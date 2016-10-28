'use strict';

var gulp = require('gulp'),
connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
  	root: 'app',
    port: 4000,
    livereload: true
  });
});
 
gulp.task('default', ['connect']);