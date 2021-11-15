import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: `@import "src/lib/styles/variables.scss";`,
			},
		}),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",

		vite: {
			define: {
				__VERSION__: JSON.stringify(process.env.npm_package_version),
			},
		},
	},
};

export default config;
