// MobX
import { types } from 'mobx-state-tree';
// Utils
import getBreakpoint from "src/utils/getBreakpoint.util";
// Models
import CoreModel from "src/models/mst/Core.model";
import AuthModel from "src/models/mst/Auth.model";
import CategoriesModel from "src/models/mst/categories/Categories.model";
import MainCategoriesModel from "src/models/mst/categories/MainCategories.model";
import SettingsModel from "src/models/mst/Settings.model";


const RootModel = {
    lang: types.union(types.literal('en'), types.literal('ua'), types.literal('ru')),
    breakpoint: types.union(types.literal('mobile'), types.literal('tablet'), types.literal('desktop')),
    auth: AuthModel,
    categories: CategoriesModel,
    mainCategories: MainCategoriesModel,
    settings: SettingsModel
};


const actions = (store)=> {
    return {

        onWindowResize() {
            if(store.settings.breakpoint !== store.breakpoint) store.update({ breakpoint: getBreakpoint.breakpoint });
        },


        // Hooks
        afterCreate() {
            window.addEventListener("resize", store.onWindowResize, false);
        },

        beforeDestroy() {
            window.removeEventListener("resize", store.onWindowResize, false);
        }
    };
};


const views = (store)=> {
    return {
    };
};

const volatile = (store)=> {
    return {
        sleep(time = 100) {
            return new Promise((resolve)=> setTimeout(resolve, time));
        }
    };
};


export default types.compose("RootModel", CoreModel, types.model(RootModel)
                    .actions(actions)
                    .views(views)
                    .volatile(volatile));
