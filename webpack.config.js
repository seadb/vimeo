module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    __dirname + '/src/app.js'
  ],
  output: {
      path: __dirname + '/public',
      publicPath: __dirname + '/public',
      filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.(jsx|js)$/, 
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
