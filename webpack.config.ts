import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/index.tsx',
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          defaultExport: true,
                        },
                      },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: (resPath: string) => Boolean(resPath.includes('.module.css')),
                                namedExport: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: ['src', 'node_modules'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
};
export default config;
