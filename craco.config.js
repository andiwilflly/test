// @SOURCE: https://github.com/gsoft-inc/craco/issues/40
const path = require("path");


module.exports = {
    webpack: {
        alias: {
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
    babel: {
        "plugins": [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            "@babel/plugin-proposal-optional-chaining"
        ]
    }
};