const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const jshint = require('gulp-jshint');

/**
 * Project main settings
 **/
var config = {
	src: {
		js: 'app/**/*.js',
		css: 'css/**/*.css',
		less: 'less/**/*.less'
	},
	libs: {
		js: [
			'vendors/js/modernizr.custom.32033.js',
			'node_modules/angular/angular.min.js',
			'node_modules/angular-ui-router/release/angular-ui-router.min.js',
			'node_modules/angular-sanitize/angular-sanitize.min.js',
			'node_modules/angular-socialshare/dist/angular-socialshare.min.js',
			'node_modules/angular-utils-pagination/dirPagination.js',
			'vendors/js/jquery-1.11.1.min.js',
			'node_modules/bootstrap/dist/js/bootstrap.min.js',
			'vendors/js/slick.min.js',
			'node_modules/jquery-waypoints/waypoints.min.js',
			'vendors/js/scripts.js',
			'node_modules/ng-meta/dist/ngMeta.min.js'
		],
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/font-awesome/css/font-awesome.min.css', // TO DO - use fonts from the package not from the font directory
			'vendors/css/animate.css',
			'vendors/css/slick.css'
		]
	}
};

/**
 * Concat all js libraries in one file for fast loading
 **/
gulp.task('js-libs', function() {
	return gulp.src(config.libs.js)
		.pipe(concat('libs.js'))
		.pipe(gulp.dest('./dist/'));
});

/**
 * Concat all css libraries in one file for fast loading
 **/
gulp.task('css-libs', function() {
	return gulp.src(config.libs.css)
		.pipe(concat('libs.css'))
		.pipe(gulp.dest('./dist/'));
});

/**
 * Task calling all task connected to libraries
 **/
gulp.task('libs', gulp.series(['js-libs', 'css-libs']));

/**
 * Validate all js files for folling correct style
 * This task should be called when compiling for staging and prod
 * and every time a file for the project is changed
 **/
gulp.task('jshint', function() {
	return gulp.src(config.src.js)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

/**
 * Concatenate all js files
 **/
gulp.task('js', function() {
	return gulp.src(config.src.js)
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./dist/'));
});

/**
 * Concatenate all css files
 **/
gulp.task('css', function() {
	return gulp.src(config.src.css)
		.pipe(concat('app.css'))
		.pipe(gulp.dest('./dist/'));
});

/**
 * Concatenate all less files
 **/
gulp.task('less', function() {
	return gulp.src(config.src.less)
		.pipe(concat('app.less'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('build', gulp.series(['jshint', 'js', 'css']));

/**
 * Task which should watch for modifucation in js files of the project
 **/
gulp.task('js-watch', function() {
	return watch(config.src.js, { ignoreInitial: false, verbose: true })
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./dist/'));
});

/**
 * Task which should watch for modifucation in css files of the project
 **/
gulp.task('css-watch', function() {
	return watch(config.src.css, { ignoreInitial: false, verbose: true })
		.pipe(concat('app.css'))
		.pipe(gulp.dest('./dist/'));
});

/**
 * Task which should watch for modifucation in less files of the project
 **/
gulp.task('less-watch', function() {
	return watch(config.src.less, { ignoreInitial: false, verbose: true })
		.pipe(gulp.dest('./.dist/'));
});

/**
 * Task which calls all watch tasks
 **/
gulp.task('watch', gulp.series(['js-watch', 'css-watch', 'less-watch']));

/**
 * List of task which should be called when only gulp is called
 * */
gulp.task('default', gulp.series(['libs', 'build']));
