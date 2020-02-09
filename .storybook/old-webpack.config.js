const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';

const sassModuleRule = {
    test: /\.module\.s(a|c)ss$/,
    loader: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    // localIdentName: '[name]__[local]',
                    localIdentName: '[path][name]__[local]',

                },
                sourceMap: isDevelopment
            }
        },
        {
            loader: 'postcss-loader'
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: isDevelopment
            }
        }
    ]
};

module.exports = ({config}) => {

    // replace module.scss rule with own to enable post-css
    config.module.rules = config.module.rules.map(rule => {

        if (rule.test.toString() === '/\\.module\\.(scss|sass)$/') {
            return sassModuleRule;
        } else {
            return rule;
        }
    });
    return config;
};

