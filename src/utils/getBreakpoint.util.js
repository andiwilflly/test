export default {
	get breakpoint() {
		switch(true) {
			case this.isMobile: return 'mobile';
			case this.isTablet: return 'tablet';
			case this.isDesktop: return 'desktop';
		}
	},
	get windowWidth() { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; },
	get isMobile() { return this.windowWidth < 767 },
	get isTablet() { return this.windowWidth >= 768 && this.windowWidth < 991 },
	get isDesktop() { return this.windowWidth >= 992 }
}
