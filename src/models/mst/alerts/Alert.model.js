// MobX
import { types, isAlive } from 'mobx-state-tree';
// Models
import CoreModel from "src/models/mst/Core.model";
// Store
import store from "src/store";


const AlertModel = {
	id: types.identifier,
	status: types.optional(
		types.union(types.literal('default'), types.literal('success'), types.literal('error'), types.literal('warning')),
		'default'
	),
	createdAt: types.number,
	hideAfterMs: types.optional(types.number, 4000)
};


const actions = (self)=> {
	return {

		startTimeout() {
			self.stopTimeout();
			self.closeAt = new Date(Date.now() + self.hideAfterMs); // TODO: DEBUG
			self.closeTimeout = setTimeout(()=> {
				if(isAlive(self)) store.modals.delete(self.id);
			}, self.hideAfterMs);
		},

		stopTimeout() {
			clearTimeout(self.closeTimeout);
		},


		calculatePos() {
			if(!self.$el) return; // Modal closed fast
			const prevModal = store.modals.list[store.modals.list.indexOf(self)-1];
			const prevBot = prevModal?.bottom || 0;
			const style = window.getComputedStyle(self.$el);
			const marginTop = parseInt(style.marginTop, 10);
			self.update({
				bottom: prevBot + self.$el.offsetHeight + marginTop
			})
		},


		// Hooks
		afterCreate() {
			// Await mount modal
			setTimeout(()=> {
				if(!self.$el) return; // Modal closed fast
				self.startTimeout();
				store.modals.calculatePosAll();// self.calculatePos();
				self.$el.addEventListener('mouseenter', self.onMouseEnter);
				self.$el.addEventListener('mouseleave', self.onMouseLeave);
			}, 0);
		},

		beforeDestroy() {
			if(!self.$el) return; // Modal closed fast
			self.$el.removeEventListener('mouseenter', self.onMouseEnter);
			self.$el.removeEventListener('mouseleave', self.onMouseLeave);
			self.stopTimeout();
			store.modals.calculatePosAll();
			self.onClose();
		}
	};
};


const views = (self)=> {
	return {
		get $el() { return document.getElementById(`modal_${self.id}`) },
	};
};


const volatile = (self)=> {
	return {
		bottom: 0,
		message: null,
		closeTimeout: null,

		onClose: ()=> {},
		onMouseEnter: ()=> self.stopTimeout(),
		onMouseLeave: ()=> self.startTimeout()
	}
};


export default types.compose("AlertModel", CoreModel, types.model(AlertModel)
					.actions(actions)
					.views(views)
					.volatile(volatile));
