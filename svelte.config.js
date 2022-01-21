// import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import vercel from "@sveltejs/adapter-vercel";
// import fs from "fs";
// import gQueryCodegen from "@leveluptuts/g-query/codegen";

// const pkg = JSON.parse(fs.readFileSync(new URL("package.json", import.meta.url), "utf8"));

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
            // plugins: [
            //     gQueryCodegen({
            //         // Required
            //         schema: "https://api-eu-central-1.graphcms.com/v2/cktki7gt20bz001z0fts08ily/master", // this can also be a url to a graphql api
            //         out: "./src/lib/graphql", // Where you want the general schema types to output
            //         gPath: "$lib/config/g", // Path to g, created in step 1.
            //     }),
            // ],
            // ssr: {
            //     noExternal: Object.keys(pkg.dependencies || {}),
            // },
        },
    },
};

export default config;
