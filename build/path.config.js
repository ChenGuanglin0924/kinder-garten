const path = require('path');

module.exports = {
    //打包入口
    BUILD_ENTRY : path.resolve(__dirname, '../src/index.js'),
    //打包出口
    BUILD_PATH : path.resolve(__dirname, '../dist'),
    //打包js文件名
    BUILD_INDEX : '[name].bundle.js',
    //编译排除路径
    EXCLUDE_PATH: path.resolve(__dirname, '../node_modules'),
    //src路径
    SRC_PATH: path.resolve(__dirname, '../src'),
    //静态文件
    STATIC_PATH : path.resolve(__dirname, '../static'),
    //CSS路径
    CSS_PATH : path.resolve(__dirname, '../css'),
}