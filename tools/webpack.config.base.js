module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(bower_components|node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime'],
      },
    }],
  },
  output: {
    libraryTarget: 'umd',
    library: 'calculator',
  },
  resolve: {
    extensions: [
      '',
      '.js',
    ],
  },
};
