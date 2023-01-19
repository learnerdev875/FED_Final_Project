import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import gulpIf from 'gulp-if';
const isProd = process.env.NODE_ENV === 'prod';
export function images() {
    return gulp
        .src('dev/images/**/*')
        .pipe(
            gulpIf(
                isProd,
                imagemin({
                    interlaced: true,
                    progressive: true,
                    optimizationLevel: 5,
                    svgoPlugins: [{ removeViewBox: true }],
                })
            )
        )
        .pipe(gulp.dest('dist/images'));
}
export function fonts() {
    return gulp.src(['dev/fonts/**/*']).pipe(gulp.dest('dist/fonts'));
}
