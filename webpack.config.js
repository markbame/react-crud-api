var webpack = require('webpack')

module.exports = {
  context: __dirname,
  devtool: "inline-sourcemap",
  entry: ["babel-polyfill", "./client/index.js"],
  output: {
    path: __dirname + "/static",
    filename: "app.js"
  },
	module: {
		rules: [
			{
				test: function(modulePath) {
					return modulePath.endsWith('.js') && !/\.test\./.test(modulePath)
				},
				exclude: /node_modules/,
				use: 'babel-loader'
			},
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
			{
				test: /\.txt$/,
				exclude: /node_modules/,
				use: 'raw-loader'
			}
		]
	},
  plugins: [

  ],
};
