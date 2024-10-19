import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: { $lib: 'src/lib', $components: 'src/components', $images: 'src/images' },

		env: {
			publicPrefix: 'PUBLIC_',
		},
		typescript: {
			config: (initial) => ({
				...initial,
				compilerOptions: {
					...initial.compilerOptions,
					allowJs: true,
					checkJs: true,
					esModuleInterop: true,
					forceConsistentCasingInFileNames: true,
					resolveJsonModule: true,
					skipLibCheck: true,
					sourceMap: true,
					strict: true,
					"maxNodeModuleJsDepth": 2
				},
			}),
		},
	}
};

export default config;
