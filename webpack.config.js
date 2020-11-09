'use strict';

const path = require('path');
const { version } = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const devTool = !isProd && 'eval-cheap-module-source-map';
const outputDir = !isProd ? 'public/dist/dev/js' : `public/dist/${version}/js`;

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: {
        index: './src/typescript/index.ts',
    },
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: '__[name].bundle.js',
    },
    devtool: devTool,
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true,
                },
            },
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
                configFile: isProd ? './tsconfig.json' : './tsconfig.dev.json',
            }),
        ],
    },
};
