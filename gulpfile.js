const gulp = require('gulp');
const babel = require('gulp-babel');
require('babel-register');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

gulp.task('build', () => {
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest('lib'));
});

gulp.task('watch', () => gulp.watch(['src/**/*.js', 'bower_components/webcomponentsjs/custom-elements-es5-adapter.js'], ['build']));

gulp.task('default', ['build', 'watch']);