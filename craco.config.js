// @SOURCE: https://github.com/gsoft-inc/craco/issues/40
const path = require("path");


// @TAILWIND FIX: https://tailwindcss.com/docs/installation#post-css-7-compatibility-build
// yarn add tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
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
    },
    style: {
        postcss: {
            plugins: [
                require("tailwindcss")("./tailwind.config.js")
            ]
        }
    }
};
