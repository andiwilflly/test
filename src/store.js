import i18next from "src/i18n/i18n";
// Utils
import getBreakpoint from "src/utils/getBreakpoint.util";
// Models
import RootModel from "src/models/mst/Root.model";


const store = RootModel.create({
    lang: i18next.language.split('-')[0] || 'en',
    breakpoint: getBreakpoint.breakpoint,
    auth: {},
    mainCategories: {},
    categories: {},
    settings: {
        SHOW_DOWNLOAD_APP_BANNER: true
    },
    alerts: {}
});

export default store;
