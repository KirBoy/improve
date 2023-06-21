import 'webpack-dev-server';
import 'html-webpack-plugin';

import {buildWebpackConfig} from "./config/webpackConfig/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/webpackConfig/types";
import path from "path";

const paths: BuildPaths = {
    html: './public/index.html',
    entry: './src/index.ts',
    output: path.resolve(__dirname, 'dist')
}
export default (env: BuildEnv) => {
    const {mode} = env;
    const isDev = mode === 'development';
    return buildWebpackConfig({ paths, mode, isDev})
}