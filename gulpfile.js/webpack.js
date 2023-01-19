import path from 'path';
import webpack from 'webpack';
import process from 'process';

const isProduction = process.env.NODE_ENV === 'production';

const dynamicEntryPoints = require('dynamic-webpack-entries');

const entries = dynamicEntryPoints({
    entryFolder: './dev/scripts/modules/',
    include: '/**/*.js',
    logEntries: true,
    options: {
        //glob options
        ignore: ['/jquery.sticky.js'],
        debug: true,
    },
});

let config = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: './scripts/[name].js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
    // context: path.resolve(__dirname, '../dist'),
    // plugins: isProduction ? [ new webpack.optimize.UglifyJsPlugin() ] : []
};

function scripts() {
    return new Promise((resolve) =>
        webpack(config, (err, stats) => {
            if (err) console.log('Webpack', err);

            console.log(
                stats.toString({
                    /* stats options */
                })
            );

            resolve();
        })
    );
}

module.exports = { config, scripts };
