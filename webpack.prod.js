const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ReactStaticPlugin = require("react-static-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const autoprefixer = require("autoprefixer");
const env = process.env.NODE_ENV;

module.exports = {
  entry: [
    "./src/index.js"
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      web_modules: path.resolve(__dirname, "src/web_modules/")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: "/.js$/",
        loader: "source-map-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader?attrs[]=video:src"
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 8192 }
          }
          // 'file-loader',
          // 'image-webpack-loader'
        ]
      },
      {
        test: /\.mp4$/,
        loader: "url-loader?limit=10000&mimetype=video/mp4"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
          // {
          //   loader: "postcss-loader"
          // }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          },
          {
            loader: "postcss-loader"
          }
          // {
          //   loader: ExtractTextPlugin.extract('css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!' +
          //     'postcss!' +
          //     `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`)
          // }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env)
    }),
    new HtmlWebpackPlugin({
      title: "网站名称",
      chunksSortMode: "dependency",
      template: path.resolve(__dirname, "./src/index.ejs")
    })
  ]
};
