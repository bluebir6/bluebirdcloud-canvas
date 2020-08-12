const webpack = require("webpack");
module.exports = {
  pwa: {
    name: "BluebirdCloud Canvas",
    themeColor: "#007BFC",
    msTileColor: "#ffffff",
    manifestOptions: {
      background_color: "#ffffff"
    }
  },
  css: {
    sourceMap: true
  },
  configureWebpack: config => {
    return {
      devtool: "source-map",
      plugins: [
        new webpack.DefinePlugin({
          "process.env": {
            APPLICATION_VERSION: JSON.stringify(
              require("./package.json").version
            ),
            APPLICATION_NAME: JSON.stringify(require("./package.json").name),
            APPLICATION_DISPLAY_NAME: JSON.stringify(
              require("./package.json").displayName
            )
          }
        })
      ]
    };
  }
};
