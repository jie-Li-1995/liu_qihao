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
        // use: [
        //   // 配置babel
        //   {
        //     // 指定加载器
        //     loader: "babel-loader",
        //     // 设置babel
        //     options: {
        //       // 设置预定义的环境
        //       presets: [
        //         [
        //           //  指定环境的插件
        //           "@babel/preset-env",
        //           // 配置信息
        //           {
        //             // 要运行正在哪个浏览器(后面是版本号)
        //             targets: {
        //               "ie": "7"
        //             },
        //             "corejs": "3",
        //             // 使用corejs的方式("usage":表示按需加载)
        //             "useBuiltIns": "usage"
        //           }
        //         ]
        //       ]
        //     }
        //   },
        //   'ts-loader',
        // ],
        // 要排除的文件
        loader: "ts-loader"
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
