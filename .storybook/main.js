// const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    addons: [
        {
            name: '@storybook/preset-create-react-app',
            options: {
                tsDocgenLoaderOptions: {},
            },
        },
        'storybook-addon-pseudo-states-react',
        'storybook-addon-pseudo-states-react/preset-postcss',
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-viewport',
    ],
};
