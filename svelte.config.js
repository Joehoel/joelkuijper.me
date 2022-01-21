// import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-vercel";
import fs from "fs";

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
        adapter: vercel(),
        target: "#svelte",

        vite: {
            define: {
                __VERSION__: parseInt(pkg.version || "1.0.0"),
            },
            ssr: {
                noExternal: Object.keys(pkg.dependencies || {}),
            },
        },
    },
};

export default config;
