var gulp = require('gulp'),
    connect = require('gulp-connect');


gulp.task('connect', function () {
  connect.server({
    port: '83',
    livereload: true
  });
});


gulp.task('default', ['connect']);

