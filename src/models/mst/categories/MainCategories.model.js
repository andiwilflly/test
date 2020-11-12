// MobX
import { types } from 'mobx-state-tree';
// Models
import CoreModel from "src/models/mst/Core.model";
import MainCategoryModel from "src/models/mst/categories/MainCategory.model";
// Store
import store from "src/store";


const MainCategoriesModel = {
    all: types.optional(types.map(MainCategoryModel), {})
};


const actions = (self)=> {
    return {

        async fetchAll() {
            let response = await store.auth.fetch('api/topCategories');
            response = await response.json();

            self.deleteAll();
            [
                response.primaryCategory,
                ...response.secondaryCategories,
            ].forEach(mainCategory => self.create(mainCategory));
        }
    };
};


const views = (self)=> {
    return {
    };
};

const volatile = (self)=> {
    return {
    };
};


export default types.compose("MainCategoriesModel", CoreModel, types.model(MainCategoriesModel)
                    .actions(actions)
                    .views(views)
                    .volatile(volatile));
