const CompressionPlugin = require("compression-webpack-plugin");

exports.onCreateWebpackConfig = ({ getConfig, stage }, options) => {
  const config = getConfig();
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
