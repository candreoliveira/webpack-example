// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
module.exports = {
  // The standard entry point and output config
  entry: {
    app: "./src/js/app"
  },
  //entry: './src/js/posts',
  output: {
    filename: "[name].js",
    chunkFilename: "[id].js",
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?{browsers:['last 4 versions', '> 1% in BR']}")
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
      // You could also use other loaders the same way. I. e. the autoprefixer-loader
    ]
  },
  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
    new ExtractTextPlugin("[name].css", {allChunks: true})
  ]
}