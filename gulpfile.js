"use strict";

var gulp = require('gulp'),
	//concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	minifyCss = require('gulp-minify-css'),
	notify = require('gulp-notify'),
	autoprefixer = require('gulp-autoprefixer'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass'),
	uncss = require('gulp-uncss'),
	wiredep = require('wiredep').stream,
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify');

//build
gulp.task('build', function() {
	var assets = useref.assets();

	return gulp.src('app/*.html')
		.pipe(assets)
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', minifyCss))
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('dist'));
});
//bower 
gulp.task('bower', function() {
	gulp.src('app/index.html')
		.pipe(wiredep({
			directory : "app/bower"
		}))
		.pipe(gulp.dest('app'));
});

// connect
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true
	});
});

// css
gulp.task('css', function() {
	gulp.src('./app/scss/*.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 15 versions'))
		.pipe(rename('main.css'))
		.pipe(gulp.dest('./app/css'))
		.pipe(connect.reload());
});

//html
gulp.task('html', function() {
	gulp.src('./app/index.html')
	.pipe(connect.reload());
});

// watch
gulp.task('watch', function() {
	gulp.watch('app/scss/*.scss', ['css']);
	gulp.watch('app/index.html', ['html']);
	gulp.watch('bower.json', ['bower']);
});

// default
gulp.task('default', ['connect', 'html', 'css', 'watch']);
