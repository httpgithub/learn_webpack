const path = require('path');
const HtmlWebpackPlugin = require('Html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'HtmlWebpackPlugin title'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        //publicPath:"/p/publicPath/",
                        // outputPath:"o/dist/outputPath/",
                        //name: '[path][name].[ext]'
                    }
                }

                ]
            }, {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};