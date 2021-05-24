
const path = require("path");
const { merge } = require("webpack-merge");

const baseConfig = require("./configs/webpack/base/baseConfig");
const devConfig = require("./configs/webpack/dev/devConfig");
const prodConfig = require("./configs/webpack/prod/prodConfig");

module.exports = env => {
	if( env.development ) return merge( baseConfig, devConfig ); 
	else if( env.production ) return merge( baseConfig, prodConfig );
	else throw new Error("Unknown Mode");
}
