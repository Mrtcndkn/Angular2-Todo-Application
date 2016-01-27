'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat');

gulp.task('concatScripts', function() {
	gulp.src([
		'js/jquery.js',
		'js/jquery-ui.js',
		'js/primeui-3.0.1-SNAPSHOT-min.js'])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('js'));
});

gulp.task('default', ['hello'], function() {
	console.log('This is default task.');
});