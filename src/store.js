// Models
import RootModel from "src/models/mst/Root.model";


const store = RootModel.create({
    auth: {},
    settings: {
        SHOW_DOWNLOAD_APP_BANNER: true
    },
    alerts: {}
});

export default store;
