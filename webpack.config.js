'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const env = process.env.NODE_ENV || 'development';
const version = require('./package.json').version;
const publicPath = env === 'production' ? `dist/${version}/js` : 'dist/dev/js';

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: env,
    entry: {
        index: './src/typescript/index.ts',
    },
    output: {
        path: env === 'production' ? path.resolve(__dirname, `public/dist/${version}/js`) : path.resolve(__dirname, 'public/dist/dev/js'),
        hashDigestLength: 6,
        filename: env === 'production' ? '[name].[hash].js' : '[name].bundle.js',
        chunkFilename: env === 'production' ? '[name].[chunkhash].js' : '[name].bundle.js',
        publicPath,
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json',
    },
    devtool: env === 'production' ? 'source-map' : 'eval',
    /*
    devServer: {
        hot: true,
        open: true,
        inline: false,
        port: 8000,
    },
    */
    optimization: {
        splitChunks: {
            chunks: 'all',
            /*
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true,
                },
            },
            */
        },
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                exclude: /node_modules\/(?!(lit-html|lit-element))\//,
                use: {
                    loader: 'ts-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: env === 'production' ? './tsconfig.json' : './tsconfig.dev.json',
            }),
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: '../../../index.html',
            template: './src/index.html',
            inject: true,
            minify:
                env === 'production'
                    ? {
                        collapseWhitespace: true,
                        removeComments: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        useShortDoctype: true,
                    }
                    : false,
        }),
    ],
};
