module.exports = {
	purge: ["./src/**/*.html", "./src/**/*.js"],
	theme: {
		colors: {
			white: '#FBFBFB',
			gray_lighter: '#FAFAFA',
			gray_light: '#EAEAEA',
			yellow_dark: '#FFD56F',
			yellow: '#F7DA92',
			yellow_light: '#F8F5E6',
			red: '#BD322F',
			green: '#61B28B',
			green_light: '#A7D7BF',
			black: '#2E3237',
			black_light: '#333333',
		},
		fontFamily: {
			'gotham':       ['GothamPro', 'Arial', 'sans-serif'],
			'gotham_black': ['GothamProBlack', 'Arial', 'sans-serif'],
			'noto':         ['Noto Sans', 'Arial', 'sans-serif'],
		},
		fontSize: {
			xxl: ['3.5em', {
				letterSpacing: '0.05em',
				lineHeight: '113%',
			}],
			xl: ['2.5em', {
				letterSpacing: '0.05em',
				lineHeight: '143%',
			}],
			lg: ['2em', {
				lineHeight: '129%',
			}],
			md: ['1.25em', {
				lineHeight: '129%',
			}],
			base: ['16px', {
				lineHeight: '150%'
			}],
			sm: ['14px', {
				letterSpacing: '0.03em',
				lineHeight: '129%'
			}],
		},
		extend: {
			screens: {
				'mobile':  { 'max': '767px' },
				'tablet':  { 'min': '768px', 'max': '991px' },
				'desktop': { 'min': '992px', 'max': '1919px' },
				'HD':      { 'min': '1920px' }
			}
		},
	},
};
