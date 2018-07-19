// import { REFUSED } from "dns";

// 一个常见的webpack配置文件
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: __dirname + "/app/main.js",      // 唯一入口文件
    output: {
        path: __dirname+"/build",   // 打包文件存放的位置
        filename: "bundle.js"    // 打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public",    // 本地服务器所加载的页面所在的目录
        historyApiFallback: true,   // 不跳转
        inline: true,    // 是否实时刷新
        // hot: true,
        port: '9000'
    },
    module: {
        rules: [
            {
                test: /(\.jsx| \.js)$/,
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: [
                    //         "env", "react"
                    //     ]
                    // }
                },
                exclude: /node_modules/
            }
        ]
    }
};