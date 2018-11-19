const path = require('path');

const config = {
  entry: [
    './index.js'
  ],
  output: {
   path: path.join(__dirname, 'public'),
   filename: 'bundle.js',
},

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ],
      },
     {
	      test: /\.(gif|jpe?g|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: false, // webpack@2.x and newer
            }
          },
	       ],
	      },
       ]
     }
  };
module.exports = config;
