
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

module.exports = {
	entry : { index : { import : "./src/index.js" } },
	module : {
		rules : [
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ 
				test: /\.js$/, 
				loader: 'babel-loader',
				exclude : /[\\/]node_modules[\\/]/,
			},
			{ 
				test : /\.(png|jpg|jpeg|svg)$/,
				type : "asset/resource",
				generator : { filename : "images/[name][ext]" },
			},
			{ 
				test : /\.(ttr|otf)$/,
				type : "asset/resource",
				generator : { filename : "fonts/[name][ext]" },
			},
		]
	},
}