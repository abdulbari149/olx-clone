import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

module.exports = {
  //other rules
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
  },
  node: {
    console: true,
    __dirname: true,
    dns: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
  },
};
