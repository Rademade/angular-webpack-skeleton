const webpack = require('webpack');
const helpers = require('./helpers');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlElementsPlugin = require('./html-elements-plugin');


const METADATA = {
  title: 'Angular2 Webpack Starter by @gdi2290 from @AngularClass',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer(),
  url: './src/app/components'

};

module.exports = {

  metadata: METADATA,

  entry: {

    'polyfills': './src/polyfills.browser.ts',
    'vendor':    './src/vendor.browser.ts',
    'main':      './src/main.browser.ts'

  },

  resolve: {

    extensions: ['', '.ts', '.js', '.json','.sass','.pug'],

    root: helpers.root('src'),

    modulesDirectories: ['node_modules','components']


  },

  module: {

    preLoaders: [

      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular'),
          helpers.root('node_modules/@ngrx'),
          helpers.root('node_modules/@angular2-material')
        ]
      }

    ],

    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.sass/,
        loader: 'raw!sass!sass-resources'
      },

      {
        include: /\.pug/,
        loader: 'pug-html-loader'
      },

      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite?' + JSON.stringify({
          name: '[name]',
          prefixize: true,
          angularBaseWorkaround: true
        })
      }
    ]
  },
  sassResources: [
    helpers.root('src/app/styles/resources/variables/main.sass'),
    helpers.root('src/app/styles/resources/mixins/keyframes.sass'),
    helpers.root('src/app/styles/resources/mixins/animation.sass'),
    helpers.root('src/app/styles/resources/mixins/clear.sass'),
    helpers.root('src/app/styles/resources/mixins/fonts.sass'),
    helpers.root('src/app/styles/resources/mixins/column.sass'),
    helpers.root('src/app/styles/resources/mixins/media.sass'),
    helpers.root('src/app/styles/resources/mixins/placeholder.sass'),
    helpers.root('src/app/styles/resources/mixins/sprite.sass'),
    helpers.root('src/app/styles/resources/mixins/text-indent.sass'),
    helpers.root('src/app/styles/resources/mixins/text-overflow.sass'),
    helpers.root('src/app/styles/resources/mixins/user-select.sass'),
    helpers.root('src/app/styles/resources/functions/em.sass'),
    helpers.root('src/app/styles/resources/functions/fonts.sass'),
    helpers.root('src/app/styles/resources/functions/lh.sass'),
    helpers.root('src/app/styles/resources/functions/ls.sass'),
    // helpers.root('src/app/styles/resources/functions/item-count.sass')
  ],
  plugins: [
    new ForkCheckerPlugin(),

    new webpack.optimize.OccurenceOrderPlugin(true),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),

    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),

    new HtmlElementsPlugin({
      headTags: require('./head-config.common')
    })
  ],

  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
