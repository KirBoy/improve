import path from 'path';

export function webpackDevServer() {
	return {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 8080,
	};
}
