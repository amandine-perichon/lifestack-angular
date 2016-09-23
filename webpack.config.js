module.exports = {
  entry: './src/index.js',
  output: 'bundle.js',
  module: {
    loaders: [
      {loader: 'babel-loader', test: /\.js$/, exclude: 'node_modules'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
