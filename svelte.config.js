// import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		// <- Create this option
		preprocess({
			// <- Add the module
			postcss: true, // <- Set this to enable PostCSS
		}),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// adapter: adapter(),
		target: "#svelte",

		vite: {
			define: {
				__VERSION__: JSON.stringify(process.env.npm_package_version),
			},
		},
	},
};

export default config;
