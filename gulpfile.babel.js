import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('babel', () => {
    gulp.src(['src/**/*.js', 'bower_components/webcomponentsjs/custom-elements-es5-adapter.js'])
        .pipe(babel())
        .pipe(gulp.dest('lib'))
});

gulp.task('watch', () => gulp.watch(['src/**/*.js', 'bower_components/webcomponentsjs/custom-elements-es5-adapter.js'], ['babel']));

gulp.task('default', ['babel', 'watch']);