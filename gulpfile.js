'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

gulp.task('test', function() {
    console.log("test worked");
});

gulp.task('sass', function() {
    gulp.src('client/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('client/dist'));
});

gulp.task('browser-sync', ['serve'], function() {
    browserSync.init(null, {
        proxy: process.env.IP + ':' + process.env.PORT,
        files: ['client/**/*.*'],
        port: 8082
    });
})

gulp.task('serve', ['sass'], function(cb) {
    var started = false;
    nodemon({
        script: 'server/server.js',
    }).on('start', function() {
        if(!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('default', ['browser-sync']);