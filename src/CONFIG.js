const CONFIG = {
    development: {
        API_URL: "devURL"
    },
    production: {
        API_URL: "prodURL"
    }
};

export default CONFIG[process.env.NODE_ENV];