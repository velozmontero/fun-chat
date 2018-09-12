1 - Initialize your package.json
    create file - package.json
    ====================================
    {
      "name": "project-name",
      "version": "1.0.0",
      "description": "Webpack Setup",
      "private": true,
      "scripts": {
        "test": "jest",
        "build": "webpack",
        "start": "webpack-dev-server"
      },
      "keywords": [],
      "author": "Frank Veloz Montero",
      "license": "ISC",
      "devDependencies": {
        "@babel/core": "^7.0.0",
        "@babel/preset-env": "^7.0.0",
        "babel-loader": "^8.0.0",
        "babel-preset-env": "^1.7.0",
        "jest": "^23.5.0",
        "uglifyjs-webpack-plugin": "^1.3.0",
        "webpack": "^4.17.1",
        "webpack-cli": "^3.1.0",
        "webpack-dev-server": "^3.1.6"
      },
      "dependencies": {
        "jquery": "^3.3.1",
        "lodash": "^4.17.10"
      }
    }
    ====================================

    create file - webpack.config.js
    ====================================
    const path = require('path');
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    module.exports = {
      mode: 'development',
      entry: './src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
      },
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000
      },
      plugins: [
        new UglifyJsPlugin()
      ],
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    };
    ====================================

2 - Install the npm modules
  - npm install

3 - File Structure
  root_folder // The folder where your project is
    - src // All the javascript of your project
      - index.js
      
    - public
      - index.html
      - style.css
      - bundle.js
      
    - package.json
    - webpack.config.js

    - package-lock.json // generated automatically by npm
