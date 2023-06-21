import {webpackRules} from "./webpackRules";
import {webpackPlugins} from "./webpackPlugins";
import {BuildWebpackConfig} from "./types";
import webpack from "webpack";
import {webpackDevServer} from "./webpackDevServer";

export function buildWebpackConfig(params: BuildWebpackConfig): webpack.Configuration {
    const {mode, paths, isDev} = params;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: 'main[contenthash].js',
            path: paths.output,
            clean: true
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        module: {
            rules: webpackRules(),
        },
        plugins: webpackPlugins(paths),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? webpackDevServer() : undefined,
    }
}