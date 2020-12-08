const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const commonConfig = require('./webpack.common');
const deps = require("../package.json").dependencies;

const devConfig = {
  mode: "development",
  devServer: {
    port: 3002,
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: "http://localhost:3002/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      filename: "remoteEntry.js",
      remotes: {
        app1: "app1@http://localhost:3001/remoteEntry.js",
      },
      exposes: {
        "./Button": "./src/Button",
        "./App": "./src/App",
      },
      // sharing code based on the installed version, to allow for multiple vendors with different versions
      shared: [
        {
          ...deps,
          react: {
            // eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            // eager: true,
            singleton: true,
            requiredVersion: deps["react-dom"],
          }
        },
      ],
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
