const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: "[id].css"
    }),
    new HtmlWebPackPlugin({
      template: "./frontend/templates/frontend/index.html",
      filename: "./index.html"
    }),
    require('autoprefixer')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'url-loader',
            query: {
                limit: 600000, // 600kB
                name: 'img/[name].[hash:7].[ext]'
            },
        },
     ]
  },
  devServer: {
    historyApiFallback: true, // Necessary for react-router-dom to work
  },
};
