const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env',"@babel/preset-react"],
            plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*", //remove all files with subdirectories irrespective of the number of subdirectories
        path.join(process.cwd(), "build/**/*"), // will remove all files & subdirs inside the build folder.
      ], // an array to specify the file patterns you want to remove
      //
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      favicon: "src/images/icon.png",
      filename: "index.html",
      template: "src/index.html",
      options: {
        sources: true,
      },
    }),
  ],
};
