// MobX
import { types } from 'mobx-state-tree';
// Models
import CoreModel from "src/models/mst/Core.model";
import CategoryModel from "src/models/mst/categories/Category.model";
// Store
import store from "src/store";


const CategoriesModel = {
    all: types.optional(types.map(CategoryModel), {})
};


const actions = (self)=> {
    return {

        async fetchAll() {
            let response = await store.auth.fetch('api/topCategories');
            response = await response.json();

            self.deleteAll();
            response.forEach(category => self.create(category));
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


export default types.compose("CategoriesModel", CoreModel, types.model(CategoriesModel)
                    .actions(actions)
                    .views(views)
                    .volatile(volatile));
