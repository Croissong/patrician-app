const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const CompressionPlugin = require('compression-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HashedModuleIdsPlugin = require('webpack/lib/HashedModuleIdsPlugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const AOT = process.env.BUILD_AOT || helpers.hasNpmFlag('aot');
const METADATA = {
  host: HOST,
  port: PORT,
  ENV: ENV,
  HMR: false,
  AOT: AOT
};

module.exports = function (env) {
  return webpackMerge(commonConfig({
    env: ENV
  }), {

    devtool: 'source-map',

    output: {
      path: helpers.root('dist'),
      filename: '[name].[chunkhash].bundle.js',
      sourceMapFilename: '[file].map',
      chunkFilename: '[name].[chunkhash].chunk.js'
    },

    module: {

      rules: [

        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1
                }
              }, {
                loader: 'postcss-loader'
              }
            ]
          }),
          include: [helpers.root('src', 'styles')]
        },

      ]

    },

    plugins: [

      new ModuleConcatenationPlugin(),

      new OptimizeJsPlugin({
        sourceMap: false
      }),

      new ExtractTextPlugin('[name].[contenthash].css'),

      new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
        'AOT': METADATA.AOT,
        'process.env.ENV': JSON.stringify(METADATA.ENV),
        'process.env.NODE_ENV': JSON.stringify(METADATA.ENV),
        'process.env.HMR': METADATA.HMR
      }),

      new UglifyJsPlugin({
        parallel: true,
        uglifyOptions: {
          ie8: false,
          ecma: 6,
          warnings: true,
          mangle: true, // debug false
          output: {
            comments: false,
            beautify: false,  // debug true
          }
        },
        warnings: true,
      }),

      new NormalModuleReplacementPlugin(
          /(angular2|@angularclass)((\\|\/)|-)hmr/,
        helpers.root('config/empty.js')
      ),

      new NormalModuleReplacementPlugin(
          /zone\.js(\\|\/)dist(\\|\/)long-stack-trace-zone/,
        helpers.root('config/empty.js')
      ),

      new HashedModuleIdsPlugin(),

      /**
       * AoT
       * Manually remove compiler just to make sure it's gone
       */
      (AOT ? (
        new NormalModuleReplacementPlugin(
            /@angular(\\|\/)compiler/,
          helpers.root('config/empty.js')
        )
      ) : (new LoaderOptionsPlugin({}))),


      new CompressionPlugin({
        regExp: /\.css$|\.html$|\.js$|\.map$/,
        threshold: 2 * 1024
      }),

      new LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {

          htmlLoader: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
            customAttrSurround: [
              [/#/, /(?:)/],
              [/\*/, /(?:)/],
              [/\[?\(?/, /(?:)/]
            ],
            customAttrAssign: [/\)?\]?=/]
          }

        }
      }),

      /**
       * Plugin: BundleAnalyzerPlugin
       * Description: Webpack plugin and CLI utility that represents
       * bundle content as convenient interactive zoomable treemap
       *
       * `npm run build:prod -- --env.analyze` to use
       *
       * See: https://github.com/th0r/webpack-bundle-analyzer
       */

    ],

    node: {
      global: true,
      crypto: 'empty',
      process: false,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

  });
};
