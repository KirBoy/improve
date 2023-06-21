import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildWebpackConfig } from './types';

export function webpackRules({
	isDev,
}: BuildWebpackConfig): webpack.RuleSetRule[] {
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64]',
						auto: (path: string) => path.includes('module'),
					},
				},
			},
			'sass-loader',
		],
	};

	const imagesLoader = {
		test: /\.(png|svg|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	};

	const fontsLoader = {
		test: /\.(woff|woff2|eot|ttf|otf)$/i,
		type: 'asset/resource',
	};

	return [tsLoader, cssLoader, imagesLoader, fontsLoader];
}
