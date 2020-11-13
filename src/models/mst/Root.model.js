// MobX
import { types } from 'mobx-state-tree';
// Models
import CoreModel from "src/models/mst/Core.model";
import AuthModel from "src/models/mst/Auth.model";
import CategoriesModel from "src/models/mst/categories/Categories.model";
import MainCategoriesModel from "src/models/mst/categories/MainCategories.model";
import SettingsModel from "src/models/mst/Settings.model";


const RootModel = {
    lang: types.union(types.literal('en'), types.literal('ua'), types.literal('ru')),
    auth: AuthModel,
    categories: CategoriesModel,
    mainCategories: MainCategoriesModel,
    settings: SettingsModel
};


const actions = (store)=> {
    return {
    };
};


const views = (store)=> {
    return {
    };
};

const volatile = (store)=> {
    return {
    };
};


export default types.compose("RootModel", CoreModel, types.model(RootModel)
                    .actions(actions)
                    .views(views)
                    .volatile(volatile));
