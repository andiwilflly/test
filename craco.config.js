const path = require("path");


module.exports = {
    webpack: {
        alias: {
            'components': path.resolve(__dirname, './src/components'),
            'models':     path.resolve(__dirname, './src/models'),
            'utils':      path.resolve(__dirname, './src/utils'),
            'styles':      path.resolve(__dirname, './src/styles')
        },
        plugins: [],
        configure: (webpackConfig, { env, paths }) => {
            return webpackConfig;
        }
    }
};