// MobX
import { types } from 'mobx-state-tree';
// Models
import CoreModel from "src/models/mst/Core.model";


const CategoryModel = {
    id: types.identifier,
    name: types.string,
    img: types.string
};


const actions = (self)=> {
    return {
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


export default types.compose("CategoryModel", CoreModel, types.model(CategoryModel)
                    .actions(actions)
                    .views(views)
                    .volatile(volatile));
