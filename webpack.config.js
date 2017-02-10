module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    __dirname + '/src/index.js'
  ],
  output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, 
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
