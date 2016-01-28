'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	start = require('gulp-start'),
	play = require('gulp-play-assets'),
	del = require('del');

gulp.task('concatScripts', function() {
	gulp.src([
		'js/jquery.js',
		'js/jquery-ui.js',
		'js/primeui-3.0.1-SNAPSHOT-min.js'])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('js'));
});

gulp.task('minifyScripts',['concatScripts'], function() {
	gulp.src('js/app.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'));
});

gulp.task('build', ['concatScripts', 'minifyScripts'], function() {
	return gulp.src(['js/app.min.js','index.html','README.md'])
				.pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
	del(['dist','js/app*.js*']);
});

gulp.task('default', ['build'], function() {
	console.log('This is default task.');
});