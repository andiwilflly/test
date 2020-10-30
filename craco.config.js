// @SOURCE: https://github.com/gsoft-inc/craco/issues/40
const path = require("path");


module.exports = {
    webpack: {
        alias: {
            'src': path.resolve(__dirname, './src'),
            'API': path.resolve(__dirname, './src/_api'),
            'components': path.resolve(__dirname, './src/components'),
            'models':     path.resolve(__dirname, './src/models'),
            'utils':      path.resolve(__dirname, './src/utils'),
            'styles':      path.resolve(__dirname, './src/styles')
        },
        plugins: [],
        configure: (webpackConfig, { env, paths }) => {
            return webpackConfig;
        }
    },
    plugins: [
        {
            plugin: require('craco-plugin-scoped-css'),
        },
    ],
    babel: {
        "plugins": [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            "@babel/plugin-proposal-optional-chaining"
        ]
    }
};