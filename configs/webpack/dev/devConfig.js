
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

module.exports = {
	mode : "development",
	devtool : "eval",
	target : "web",
	output : {
		filename : "[name].js",
		path : path.resolve( __dirname, "../../../dist" ),
		publicPath : "/",
		clean : true,
	},
	plugins : [
		new VueLoaderPlugin(),
		new HTMLWebpackPlugin({
			template : "./src/index.html",
			filename : "index.html",
			chunks : ["index"],
		}),
		new webpack.DefinePlugin({
			__VUE_OPTIONS_API__ : JSON.stringify(true),
			__VUE_PROD_DEVTOOLS__ : JSON.stringify(false),
		})
	],
	module : {
		rules : [
			{ test: /\.scss$/, use: [
				{ loader : "vue-style-loader" },
				{ loader : "css-loader" },
				{ loader : "sass-loader" },
			]},
		]
	},
	devServer : {
		contentBase : path.resolve(__dirname, "../../../dist"),
		watchContentBase : true,	
		liveReload : true, 
		compress : true, 
		quiet : false,
		clientLogLevel : "silent",
		port : 8080, 
		open : true, 
		openPage : "index.html",
		publicPath : "/",
		writeToDisk : true,
	},
}