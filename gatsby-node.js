const CompressionPlugin = require("compression-webpack-plugin");

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  if(!options){
    // Default options for ordinary gatsby project.
    options = {
      asset: '[path].gz[query]',
      algorithm: 'gzip'
    };
  }
  switch (stage) {
    case `build-html`:
    case `build-javascript`:
    case `build-css`:
      actions.setWebpackConfig({
        plugins: [
          new CompressionPlugin(options)
        ],
      })
  }
}
