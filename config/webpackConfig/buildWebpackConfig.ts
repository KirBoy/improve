import {webpackRules} from "./webpackRules";
import {webpackPlugins} from "./webpackPlugins";
import {BuildWebpackConfig} from "./types";
import webpack from "webpack";

export function buildWebpackConfig(params: BuildWebpackConfig): webpack.Configuration {
    const {mode, paths} = params;
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
    }
}