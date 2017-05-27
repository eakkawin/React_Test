module.exports = {
    entry: './js/components/index.js',
    output: {
      path: __dirname+'/assets',
      filename: 'bundle.js'
    },
    devServer: {
      inline: true,
      port: 5555
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.sass$/,
          exclude: /node_modules/,
          loaders: ['style-loader','css-loader','sass-loader']
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    }
};
