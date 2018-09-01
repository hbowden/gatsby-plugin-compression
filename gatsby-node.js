const CompressionPlugin = require("compression-webpack-plugin");

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  switch (stage) {
    case `build-html`:
    case `build-javascript`:
    case `build-css`:
      actions.setWebpackConfig({
        plugins: [
          new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip'
          })
        ],
      })
  }
}
