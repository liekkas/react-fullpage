console.log(__dirname);
module.exports = {
	cache: true,
	debug: true,
	entry: [
		__dirname + '/demo'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel'
		}]
	}
};