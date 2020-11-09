'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const { version } = require('./package.json');
const env = process.env.NODE_ENV;
const isProd = env === 'production';
const destDir = !isProd ? './public/dist/dev/css' : `./public/dist/${version}/css`;

const sassCompile = (done) => {
    gulp
        .src('./src/sass/*.scss')
        .pipe(sass({
            outputStyle: isProd ? 'compressed' : 'expanded',
        }))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(destDir));
    done();
};

gulp.task('sass', sassCompile);

gulp.task('sass:watch', (done) => {
    gulp.watch('./src/sass/*.scss', gulp.task('sass'));
    done();
});
