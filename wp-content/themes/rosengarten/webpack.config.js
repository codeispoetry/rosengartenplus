const path = require('path');
const ConcatPlugin = require('webpack-concat-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = (env = {}) => {
    return {
        mode: 'development',
        devtool: (isDevelopment) ? 'source-map' : false,
        entry:[  path.resolve(__dirname, 'build/scss/main.scss') ],
        output: {
            filename: 'js/main.min.js',
            path:  path.resolve(__dirname,"dist/"),
            sourceMapFilename: '[file].map'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: { }
                    }
                },
                {
                    test: /.scss$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'css/styles.css',
                                outputPath: './',
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'extract-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]
                }
            ]
        }
    }
};


