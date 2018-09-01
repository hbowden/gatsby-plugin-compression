const CompressionPlugin = require("compression-webpack-plugin");

exports.onCreateWebpackConfig = ({ config, stage }, options) => {
  switch (stage) {
    case `build-html`:
    case `build-javascript`:
    case `build-css`: {
      config.plugin(`compression`,
        CompressionPlugin,
        [{asset: '[path].gz[query]', algorithm: 'gzip'}]
      );
      return config
    }
    default: {
      return config
    }
  }
}
