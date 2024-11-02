import container_queries from '@tailwindcss/container-queries';
// import typography from '@tailwindcss/typography';
import fluid, { extract, fontSize, screens } from 'fluid-tailwind';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
// import colors from 'tailwindcss/colors';

// const font_brand = ['Satoshi-Variable', 'ClashDisplay-Variable', ...defaultTheme.fontFamily.sans];

export default {
	darkMode: 'class',
	content: {
		files: ['./src/*.html', './src/**/*.{svelte,md,ts}', '.svelte-kit/**/*.svelte'],
		extract,
	},
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '88rem',
			},
		},
		extend: {
			blur: {
				'4xl': '104px',
				'5xl': '168px',
				'6xl': '272px',
			},
			borderRadius: {
				'3xl': '2rem',
			},
			colors: {
				white: '#fff',
				black: '#000',
				primary: colors.blue,
				mono: colors.zinc,
			},
			containers: {
				'5xs': '4rem',
				'4.5xs': '6rem',
				'4xs': '8rem',
				'3xs': '12rem',
				'2xs': '16rem',
			},
			fontFamily: {
				sans: ['Geist Sans', ...defaultTheme.fontFamily.sans],
				mono: ['Geist Mono', ...defaultTheme.fontFamily.mono],
				// sans: font_brand.toString(),
			},
			/* gridTemplateColumns: {
				// auto fit 5rem columns
				desktop: 'repeat(12, minmax(5rem, 1fr))',
				mobile: 'repeat(12, minmax(auto, 5rem))',
			}, */
			lineHeight: {
				tighter: '1.1',
			},
			spacing: {
				// 40: "10rem",
				// 44: "11rem",
				// 48: "12rem",
				// 52: "13rem",
				// 56: "14rem",
				// 60: "15rem",
				// 64: "16rem",
				// 72: "18rem",
				// 80: "20rem",
				// 96: "24rem",
				128: '32rem',
				160: '40rem',
			},
			transitionTimingFunction: {
				'out-circ': 'cubic-bezier(0, 0.3, 0, 1)',
				'in-out-bounce': 'cubic-bezier(0.8, -0.75, 0.75, 0.75)',
			},
		},
		fontSize,
		screens: {
			...screens,
			xs: '22rem',
			mobile: { raw: '(hover: none) and (pointer: coarse)' },
			desktop: { raw: '(hover: hover) and (pointer: fine)' },
		},
	},

	plugins: [
		container_queries,
		// typography,
		fluid({ checkSC144: false }),

		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus', '&:focus-visible']);
			addVariant('error', ['&:invalid', '&.invalid']);
			addVariant('current', ['&.current']);
			addVariant('resting', ['&:not(.current)']);
			// addVariant('focus', ['&:focus', '&:focus-visible', '&:focus-within']);
		}),
	],
} satisfies Config;
