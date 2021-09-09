const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '/src/index.ts'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib'),
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "env"
            ]
          }
        },
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "src")
      },
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 要使用的loder;从后往前执行
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "src")
      },
      { test: /\.css$/, use: 'css-loader' },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyjsWebpackPlugin()
    //参数是一个数组，数组中是需要删除的目录名
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}
