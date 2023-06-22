import path from 'path';
import type { Configuration } from 'webpack-dev-server';

export function webpackDevServer(): Configuration {
	return {
		historyApiFallback: true,
		port: 8080,
		hot: true,
	};
}
