var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	minifyCss = require('gulp-minify-css'),
	notify = require('gulp-notify');

var cssFiles = ['app/css/reset.css', 'app/css/main.css'];

gulp.task('default', function() {
	gulp.src(cssFiles)
		.pipe(concatCss("main.css"))
		.pipe(minifyCss())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('dist/css/'))
		.pipe(notify('Done!'));
});

gulp.task('watch', function() {
	gulp.watch(cssFiles, ['default'])
});
