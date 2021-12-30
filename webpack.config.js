const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const assetProcessing = outDir => ({
  loader: 'url-loader',
  options: {
    limit: 10000,
    fallback: 'file-loader',
    outputPath: outDir,
  },
});

module.exports = {
  entry: './src/index',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss', '.svg'],
    alias: {
      app: path.resolve(__dirname, 'src/app/'),
      assets: path.resolve(__dirname, 'src/assets/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          }
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg?$/,
        oneOf: [
          {
            issuer: /\.(scss|css)?$/,
            use: assetProcessing('images'),
          },
          {
            issuer: /\.tsx?$/,
            use: '@svgr/webpack',
          },
          {
            use: '@svgr/webpack',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './src/assets/styles/variables/variables.scss',
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'assets/images',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)?$/,
        use: assetProcessing('fonts'),
      },
      // {
      //   test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
      //   type: 'assets/inline',
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      title: 'React Template',
      baseHref: '/',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    open: false,
  },
};
