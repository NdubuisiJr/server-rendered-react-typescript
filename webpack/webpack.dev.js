const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer:{
        hot: true
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new ReactRefreshWebpackPlugin()
    ]
}