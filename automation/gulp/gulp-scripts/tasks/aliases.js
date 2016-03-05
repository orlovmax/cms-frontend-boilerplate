// Include gulp
var gulp = require('gulp'),
	runSequence = require('run-sequence');

// Install bower dependencies and place them to dev folders
gulp.task('start', function() {
	runSequence(
		'shell:bower',
		'bower:ie',
		'bower:vendor',
		'clean:gitkeep'
	);
});

// Dev task with static server
gulp.task('dev', function() {
	runSequence(
		'coffee:main',
		'coffee:head',
		'coffee:vendor',
		'concat:main',
		'concat:head',
		'concat:ie',
		'concat:vendor',
		'sass',
		'stylus',
		'cmq',
		'jade',
		'sync:helpers',
		'browserSync',
		'watch:dev'
	);
});

// Build task
gulp.task('build', function() {
	runSequence(
		'imagemin',
		'processhtml',
		'autoprefixer',
		'csscomb',
		'uglify',
		'csso',
		'browserSync'
	);
});

// Regenerate and build project by running all tasks
gulp.task('rebuild', function() {
	runSequence(
		'coffee:main',
		'coffee:head',
		'coffee:vendor',
		'concat:main',
		'concat:head',
		'concat:ie',
		'concat:vendor',
		'sass',
		'stylus',
		'cmq',
		'jade',
		'sync:helpers',
		'imagemin',
		'processhtml',
		'autoprefixer',
		'csscomb',
		'uglify',
		'csso'
	);
});

// Run server for static theme
gulp.task('server', ['browserSync']);
