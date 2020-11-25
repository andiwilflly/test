module.exports = {
	purge: ["./src/**/*.html", "./src/**/*.js"],
	theme: {
		extend: {
			screens: {
				'mobile':  { 'max': '767px' },
				'tablet':  { 'min': '768px', 'max': '991px' },
				'desktop': { 'min': '992px', 'max': '1919px' },
				'hd':      { 'min': '1920px' },
			}
		},
	},
};
