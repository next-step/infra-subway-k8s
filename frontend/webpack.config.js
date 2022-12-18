const commonConfig = require('./webpack.common.js')
const webpackMerge = require('webpack-merge')
const { argv } = require('yargs')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = () => {
  const envConfig = require(`./webpack.${argv.env}.js`)
  return webpackMerge(commonConfig, envConfig)
}

module.exports = {
    configureWebpack: {
        plugins: [new BundleAnalyzerPlugin()]
    }
};
