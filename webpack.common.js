const HtmlWebpackPlugin = require("html-webpack-plugin");
const loader = require("sass-loader");
// const path = require("path")

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"]
            }
        ]
    }
}