import { webpackRules } from './webpackRules';
import { webpackPlugins } from './webpackPlugins';
import { BuildWebpackConfig } from './types';
import webpack from 'webpack';
import { webpackDevServer } from './webpackDevServer';
import { webpackResolvers } from './webpackResolvers';

export function buildWebpackConfig(
	params: BuildWebpackConfig
): webpack.Configuration {
	const { mode = 'development', paths, isDev = true } = params;
	return {
		mode,
		entry: paths.entry,
		output: {
			publicPath: '/',
			filename: 'main[contenthash:8].js',
			path: paths.output,
			clean: true,
		},
		resolve: webpackResolvers(paths),
		module: {
			rules: webpackRules(params),
		},
		plugins: webpackPlugins(paths),
		devtool: isDev && 'inline-source-map',
		devServer: isDev ? webpackDevServer() : undefined,
	};
}
