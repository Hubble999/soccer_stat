const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.tsx', // точка входа, о которой говорилось ранее.
    mode: 'development',
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], 
            },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: 'eval-source-map',
}