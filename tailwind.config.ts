import type { Config } from 'tailwindcss';
import tailwind3dtransforms from '@xpd/tailwind-3dtransforms';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [tailwind3dtransforms]
} satisfies Config;
