import webpack from 'webpack';
import 'webpack-dev-server';
import 'html-webpack-plugin';

import {buildWebpackConfig} from "./config/webpackConfig/buildWebpackConfig";
import {BuildPaths} from "./config/webpackConfig/types";
import path from "path";

const paths: BuildPaths = {
    html: './public/index.html',
    entry: './src/index.ts',
    output: path.resolve(__dirname, 'dist')
}

const config: webpack.Configuration = buildWebpackConfig({ paths, mode: 'development'});

export default config;