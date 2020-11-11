// MobX
import { types } from 'mobx-state-tree';
// Models
import CoreModel from "src/models/mst/Core.model";
import AuthModel from "src/models/mst/Auth.model";


const RootModel = {
    auth: AuthModel
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
