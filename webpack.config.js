var pkg = require('./package.json');

module.exports = {
  cache: true,

  resolve: { extensions: ['', '.jsx', '.js'] },

  context: __dirname,

  entry: { index: ['webpack/hot/dev-server', './index.jsx'] },

  output: {
    path: '',
    filename: pkg.name + '.[name].js',
    publicPath: ''
  },

  devServer: {
    host        : '0.0.0.0',
    port        : 8080,
    inline      : true
  },

  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel',
        query: { presets: ['es2015', 'stage-0', 'react'] }
      }
    ]
  }
};
