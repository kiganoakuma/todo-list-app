const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Tell the dev server to serve files from 'dist'
    },
    port: 9000, // Optional: specify a custom port if needed
  },
};
