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
        path.resolve('./.storybook/preset-postcss'),
    ],
    addons: [
        'storybook-addon-pseudo-states-react/register',
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-viewport',
    ],
};
