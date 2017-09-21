const path = require('path')
const webpack = require('webpack')
const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
	entry: [
		'./src/main.js',
		'./src/scss/bundle.scss',
		'./src/scss/font-awesome/font-awesome.scss'
	],
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: PRODUCTION ? 'dist/' : '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': 'vue-style-loader!css-loader!sass-loader?outputStyle=compressed',
						'sass': 'vue-style-loader!css-loader!sass-loader?outputStyle=compressed'
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					limit: 5000,
					name: 'images/[name].[ext]?[hash:12]'
				}
			},
			{
				test: /\.(ttf|otf|woff|eot|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 1000,
					name: 'fonts/[name].[ext]?[hash:12]'
				}
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader',
					'sass-loader?outputStyle=compressed'
				]
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			//'jquery-ui': 'jquery-ui-dist/jquery-ui.min.js',
			//'jquery-ui-css': 'jquery-ui-dist/jquery-ui.min.css'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}