// import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import netlify from "@sveltejs/adapter-netlify";

const pkg = JSON.parse(fs.readFileSync(new URL("package.json", import.meta.url), "utf8"));

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
        adapter: netlify(),
        target: "#svelte",

        vite: {
            define: {
                __VERSION__: pkg.version || "1.0.0",
            },
            ssr: {
                noExternal: Object.keys(pkg.dependencies || {}),
            },
        },
    },
};

export default config;
