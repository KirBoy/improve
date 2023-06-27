import { ResolveOptions } from 'webpack';
import { BuildPaths } from './types';

export const webpackResolvers = ({ srs }: BuildPaths): ResolveOptions => {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		alias: {
			'@': srs,
		},
	};
};
