import gulp from 'gulp';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';

import autoprefixer from 'gulp-autoprefixer';
// import postcss from 'gulp-postcss';
// import autoprefixer from 'autoprefixer';

import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import bs from 'browser-sync';

const paths = {
    styles: {
        src: 'dev/scss/*.scss',
        dest: 'dist/css/',
    },
    moduleStyles: {
        src: 'dev/scss/styles/*.scss',
        dest: 'dist/css/styles/',
    },
};
var versionConfig = {
    value: '%MDS%',
    append: {
        key: 'v',
        to: ['css', 'js'],
    },
};
function modules() {
    return gulp
        .src(paths.moduleStyles.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false,
            })
        )
        .pipe(
            rename({
                suffix: '.min',
            })
        )
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(paths.moduleStyles.dest))
        .pipe(bs.stream());
}
module.exports = { modules };
