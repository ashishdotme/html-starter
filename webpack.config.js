const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [new HTMLWebpackPlugin({
        title: 'HTML Starter',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/index.ejs'
    })]
};