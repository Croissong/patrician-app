const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const PUBLIC = process.env.PUBLIC_DEV || HOST + ':' + PORT;
const AOT = process.env.BUILD_AOT || helpers.hasNpmFlag('aot');
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
  host: HOST,
  port: PORT,
  public: PUBLIC,
  ENV: ENV,
  HMR: HMR,
  AOT: AOT
};

module.exports = function (options) {
  return webpackMerge(commonConfig({env: ENV}), {

    devtool: 'cheap-module-source-map',

    output: {

      path: helpers.root('dist'),

      filename: '[name].bundle.js',

      sourceMapFilename: '[file].map',

      chunkFilename: '[id].chunk.js',

      library: 'ac_[name]',
      libraryTarget: 'var'
    },

    module: {

      rules: [

        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            }, {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            }, {
              loader: 'postcss-loader'
            }
          ],
          include: [helpers.root('src', 'styles')]
        },

      ]

    },

    plugins: [

      new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
        'process.env.ENV': JSON.stringify(METADATA.ENV),
        'process.env.NODE_ENV': JSON.stringify(METADATA.ENV),
        'process.env.HMR': METADATA.HMR
      }),

      new AutoDllPlugin({
        debug: true,
        inject: true,
        context: helpers.root(),
        filename: '[name]_[hash].js',
        path: './dll',
        entry: {
          polyfills: [
            'core-js',
            'zone.js/dist/zone.js',
            'zone.js/dist/long-stack-trace-zone'
          ],
          vendor: [
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/animations',
            '@angular/cdk',
            '@angular/core',
            '@angular/common',
            '@angular/forms',
            '@angular/http',
            '@angular/material',
            '@angular/router',
            '@angularclass/hmr',
            'rxjs',
          ]
        }
      }),

      new NamedModulesPlugin(),

      new LoaderOptionsPlugin({
        debug: true,
        options: {

        }
      }),

      new HotModuleReplacementPlugin()

    ],

    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      hot: METADATA.HMR,
      public: METADATA.public,
      historyApiFallback: true,
      watchOptions: {
        // if you're using Docker you may need this
        // aggregateTimeout: 300,
        // poll: 1000,
        ignored: /node_modules/
      },
      stats: 'errors-only',
      proxy: {
        '!**/*.*': {
          target: 'http://localhost:3001'
        },
        '/socket/*': {
          target: 'http://localhost:4000',
          ws: true
        }
      }
    },

    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

  });
}
