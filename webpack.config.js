const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'ROOT': path.join(__dirname, 'src')
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.EnvironmentPlugin({
            AWS_AMPLIFY_AUTH_IDENTITYPOOLID: process.env.AWS_AMPLIFY_AUTH_IDENTITYPOOLID,
            AWS_AMPLIFY_AUTH_USERPOOLID: process.env.AWS_AMPLIFY_AUTH_USERPOOLID,
            AWS_AMPLIFY_AUTH_USERPOOL_WEBCLIENT_ID: process.env.AWS_AMPLIFY_AUTH_USERPOOL_WEBCLIENT_ID,
            AWS_AMPLIFY_API_ENDPOINT: process.env.AWS_AMPLIFY_API_ENDPOINT
        }),
    ]
};