const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'development',
	devServer: {
		port: 9000,
		historyApiFallback: {
			disableDotRule: true
		}
	},
	entry: './src/index',
	stats: 'errors-only',
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true
						}
					}
				],
				include: /\.module\.css$/
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ],
				exclude: /\.module\.css$/
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new Dotenv(),
		new MiniCssExtractPlugin(),
		new Dotenv({
			path: './.env',
			safe: true,
			systemvars: true,
			silent: true,
			defaults: false
		})
	],

	resolve: {
		alias: {
			'react-router-dom': path.resolve('./node_modules/react-router-dom')
		}
	}
};