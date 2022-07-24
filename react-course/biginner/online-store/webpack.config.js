const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  devtool: 'inline-source-map',
  mode: process.env.NODE_ENV || "development",
  stats: {
    errorDetails: true
  },
  resolve: { 
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".json", ".ts", ".tsx"]
 },
  devServer: { static: { directory: path.join(__dirname, "src") } },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};