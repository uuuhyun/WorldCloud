'use strict'
const path = require('path');

module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: 'babel-loader'
        }]
    },
    plugins: [],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        host: 'localhost',
        port: 8080
    }
}