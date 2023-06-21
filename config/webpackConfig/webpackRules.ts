import webpack from "webpack";

export function webpackRules(): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
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