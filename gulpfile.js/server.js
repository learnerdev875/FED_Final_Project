import gulp from 'gulp';
import Browser from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

// import scripts from './webpack'
import { modules, styles } from './style';
import { htmlmin2 } from './html';

import { images, fonts } from './fonts';

import { config as webpackConfig, scripts } from './webpack';
import process from 'process';

const isProduction = process.env.NODE_ENV === 'production';

const browser = Browser.create();
const bundler = webpack({
    ...webpackConfig,
    mode: isProduction ? 'production' : 'development',
});

export function server() {
    let config = {
        server: 'dist',
        open: true,
        middleware: [
            webpackDevMiddleware(bundler, {
                /*
                I would recommend turning this off since, in development, webpack serve the files from memory.
                This is enabled just in case
                 */
                writeToDisk: true,
            }),
        ],
    };

    browser.init(config);

    gulp.watch('dev/scripts/**/*.js', gulp.parallel(scripts)).on('change', () => browser.reload());
    // gulp.watch('dev/scss/*.scss',gulp.parallel(styles)).on('change', () => browser.reload());
    gulp.watch('dev/scss/**/*.scss', gulp.parallel(styles)).on('change', () => browser.reload());
    gulp.watch('dev/scss/styles/*.scss', gulp.parallel(modules)).on('change', () => browser.reload());
    gulp.watch('dev/**/*.html', gulp.parallel(htmlmin2)).on('change', () => browser.reload());

    gulp.watch('dev/images/**/*.*', gulp.series(images));
    gulp.watch('dev/fonts/**/*.*', gulp.series(fonts));
}
