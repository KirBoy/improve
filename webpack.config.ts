import 'webpack-dev-server';
import 'html-webpack-plugin';

import { buildWebpackConfig } from './config/webpackConfig/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/webpackConfig/types';
import path from 'path';

const paths: BuildPaths = {
	html: './public/index.html',
	entry: './src/index.tsx',
	output: path.resolve(__dirname, 'dist'),
	srs: path.resolve(__dirname, 'src'),
};
export default (env: BuildEnv) => {
	const { mode } = env;

	const isDev = mode !== 'production';

	return buildWebpackConfig({ paths, mode, isDev });
};
