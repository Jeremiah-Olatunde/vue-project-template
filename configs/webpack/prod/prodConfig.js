
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

module.exports = {
	mode : "production",
	devtool : "source-map",
	target : "web",
	output : {
		filename : "[name].[contenthash].js",
		path : path.resolve( __dirname, "../../../dist" ),
		publicPath : "./",
		clean : true,
	},
	plugins : [
		new VueLoaderPlugin(),
		new MiniCSSExtractPlugin({ filename : "[name].[contenthash].css" }),
		new HTMLWebpackPlugin({
			template : "./src/index.html",
			filename : "index.[contenthash].html",
			chunks : ["index"],
		}),
		new webpack.DefinePlugin({
			__VUE_OPTIONS_API__ : JSON.stringify(true),
			__VUE_PROD_DEVTOOLS__ : JSON.stringify(false),
		}),
	],
	optimization : {
		splitChunks : {
			cacheGroups : {
				vendors : {
					name : "vendors",
					chunks : "all",
					test : /[\\/]node_modules[\\/]/,
				}
			}
		}
	},
	module : {
		rules : [
			{ test: /\.scss$/, use: [
				{ loader : MiniCSSExtractPlugin.loader }, 
				{ loader : "css-loader" },
				{ loader : "sass-loader" },
			]},
		]
	},
}