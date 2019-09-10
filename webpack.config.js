const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                type: 'javascript/auto',
                test: /\.mjs$/,
                use: []
            }
        ]
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['*', '.js', 'jsx']
    },
    output: {
        publicPath: path.resolve(__dirname, 'build/'),
        filename: 'build.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8080,
        publicPath: 'http://localhost:8080/build'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}