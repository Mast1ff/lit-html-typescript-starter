'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const { version } = require('./package.json');

const sassCompile = (done) => {
    gulp
        .src('./src/sass/*.scss')
        .pipe(sass({
            outputStyle: 'expanded',
        }))
        .pipe(postcss([
            autoprefixer(
                {
                // overrideBrowserslist: ['last 2 versions', '> 2%'],
                }
            ),
        ]))
        .pipe(gulp.dest('./public/dist/dev/css'));
    done();
};

const sassCompileProd = (done) => {
    gulp
        .src('./src/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
        }))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(`./public/dist/${version}/css`));
    done();
};

gulp.task('sass', sassCompile);

gulp.task('sass:build', sassCompileProd);

gulp.task('sass:watch', (done) => {
    gulp.watch('./src/sass/*.scss', gulp.task('sass'));
    done();
});
