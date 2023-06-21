import webpack from "webpack";

export function webpackRules(): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const cssLoader = {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    }

    const imagesLoader = {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const fontsLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
    }

    return [tsLoader, cssLoader, imagesLoader, fontsLoader];
}