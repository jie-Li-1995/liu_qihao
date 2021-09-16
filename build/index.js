const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '/src/index.ts'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../lib'),
    // 配置打包输出环境，不使用箭头函数
    environment: {
      arrowFunction: false,
    },
    libraryExport: 'default',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
            ],
          },
        },
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
      },
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 要使用的loder;从后往前执行
        use: [
          {
            // 配置babel，
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 目标，生成的js要运行在哪个浏览器上，兼容哪个版本
                    targets: {
                      'chrome': '55',
                      'ie': '11',
                    },
                    // 下面两个配置是很重要的，比如我们使用了promise，但是在ie中很明显是没有这个新特性的，也不支持的
                    // 那么如果下面的配置没有进行配置，babel是不会帮我们进行转换为ie能识别的代码的
                    // 当我们配置了以后，babel就会把自己实现的promise引入到生成的文件中，就可以使用promise了
                    // 指定用哪个版本的core-js，是我们安装的第三方模块
                    'corejs': '3',
                    // 使用 corejs的方式 usage 表示按需加载
                    'useBuiltIns': 'usage',
                  },
                ],
              ],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, '../tsconfig.json'),
            },
          },
        ],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      { test: /\.css$/, use: 'css-loader' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyjsWebpackPlugin(),
    //参数是一个数组，数组中是需要删除的目录名
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
}
