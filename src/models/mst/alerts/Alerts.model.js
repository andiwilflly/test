import React from 'react';
// MobX
import { types } from 'mobx-state-tree';
// Models
import AlertModel from "src/models/mst/alerts/Alert.model";
// Store
import store from "src/store";


const AlertsModel = {
	all: types.optional(types.map(AlertModel), {})
};


const actions = (self)=> {
	return {

		create(modal = {}) {
			if(self.all.has(modal.id)) return self.recreate(modal);
			self.all.set(modal.id, { ...modal, createdAt: Date.now() });
			self.all.get(modal.id).update(modal); // Set volatile
		},


		delete(id) {
			self.all.delete(id);
		},


		async recreate(modal) {
			self.delete(modal.id);
			await store.time.sleep(0);
			self.create(modal);
		},


		calculatePosAll() {
			self.list.forEach(modal => modal.update({ bottom: 0 }));
			self.list.reverse().forEach(modal => modal.calculatePos());
		},
	};
};


const views = (self)=> {
	return {
	};
};


const volatile = (self)=> {
	return {}
};


export default types.model("AlertsModel", AlertsModel)
					.actions(actions)
					.views(views)
					.volatile(volatile);
