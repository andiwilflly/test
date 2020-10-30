// MobX
import { types } from 'mobx-state-tree';
// Models
import CoreModel from "./Core.model";


const RootModel = {
    user: types.string
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