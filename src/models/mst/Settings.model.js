// MobX
import { types } from 'mobx-state-tree';
// Models
import CoreModel from "./Core.model";


const SettingsModel = {
    SHOW_DOWNLOAD_APP_BANNER: types.boolean
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


export default types.compose("SettingsModel", CoreModel, types.model(SettingsModel)
                    .actions(actions)
                    .views(views)
                    .volatile(volatile));
