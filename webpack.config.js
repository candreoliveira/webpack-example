module.exports = {
  entry: ['./sum.js', './subtraction.js'],
  output: {
    path: __dirname,
    filename: 'output.js'
  },
  modules: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
}