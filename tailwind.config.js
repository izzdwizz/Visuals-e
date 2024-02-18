/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				'animate-fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'animate-fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				blob: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.8)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
			},
			animation: {
				'fade-in': 'animate-fade-in 0.4s ease-out backwards',
				'fade-out': 'animate-fade-out 0.4s ease-out forwards',
				blob: 'blob 6s infinite',
			},
		},
	},
	plugins: [],
};
