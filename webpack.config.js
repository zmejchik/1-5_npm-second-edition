const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'docs/scripts'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
