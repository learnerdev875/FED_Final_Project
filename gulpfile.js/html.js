import gulp from 'gulp';

import htmlmin from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
import strip from 'gulp-strip-comments';
import fileinclude from 'gulp-file-include';
import bs from 'browser-sync';

import version from 'gulp-version-number';

var versionConfig = {
    value: '%MDS%',
    append: {
        key: 'v',
        to: ['css', 'js'],
    },
};

export function htmlmin2() {
    return gulp
        .src('dev/*.html')
        .pipe(plumber())
        .pipe(
            strip({
                safe: '<!--[if',
            })
        )
        .pipe(
            fileinclude({
                prefix: '@@',
                basepath: '@file',
            })
        )
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(version(versionConfig))
        .pipe(gulp.dest('dist/'))
        .pipe(bs.stream());
}
