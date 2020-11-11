// MobX
import { types } from 'mobx-state-tree';
// Models
import CoreModel from "./Core.model";


const AuthModel = {
};


const actions = (self)=> {
    return {
        async fetch(url = '', options = {}) {
            options = {
                method: 'GET',
                headers: {},
                body: null,
                isShowErrorAlert: true,
                ...options
            };

            let response = await fetch(url, {
                method: options.method,
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    ...options.headers,
                },
                ...options.body && { body: options.body }
            });

            if(response.status !== 200 && response.status !== 204) {
                response = response.clone();
                let errMsg = '';
                try {
                    errMsg = await response.text();
                } catch(e) {
                    errMsg = JSON.stringify(await response.json())
                }
                console.log('errMsg:', errMsg);
            }

            return response;
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


export default types.compose("AuthModel", CoreModel, types.model(AuthModel)
                    .actions(actions)
                    .views(views)
                    .volatile(volatile));
