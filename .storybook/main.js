const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    presets: [
        {
            name: '@storybook/preset-create-react-app',
            options: {
                tsDocgenLoaderOptions: {},
            },
        },
        'storybook-addon-pseudo-states-react/preset-postcss',
        {name: path.resolve('./.storybook/my-preset')},
        // path.resolve('../node_modules/storybook-addon-pseudo-states-react/dist/react/preset-postcss.js')
        // {
        //     name: 'storybook-addon-pseudo-states-react/preset-postcss',
        //     options: {
        //         cssLoaderOptions: {
        //             modules: true,
        //             localIdentName: '[path][name]__[local]',
        //         }
        //     },
        // },
        // {
        //     name: path.resolve('./.storybook/my-preset'),
        //     options: {
        //         cssLoaderOptions: {
        //             modules: true,
        //             localIdentName: '[path][name]__[local]',
        //         }
        //     },
        // } 'storybook-addon-pseudo-states-react/preset',
        // {
        //     name: 'storybook-addon-pseudo-states-react/preset',
        //     options: {
        //         cssLoaderOptions: {
        //             modules: true,
        //             localIdentName: '[path][name]__[local]',
        //         }
        //     },
        // },
        /*{
            name: path.resolve('./.storybook/my-preset'),
            options: {
                cssLoaderOptions: {
                    modules: true,
                    localIdentName: '[path][name]__[local]',
                }
            },
        }*/
    ],
    addons: [
        'storybook-addon-pseudo-states-react/register',
        'storybook-addon-pseudo-states-react/preset-postcss',
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-viewport',
        // 'storybook-addon-pseudo-states-react',
        // {
        //     name: 'storybook-addon-pseudo-states-react',
        // options: {
        //     visibleByDefault: false
        // }
        // }
    ],

    // managerWebpack: async (config, options) => {
    //     // update config here
    //     console.log('webpack config');
    //     return config;
    // },
};
