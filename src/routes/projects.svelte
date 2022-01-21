<script context="module" lang="ts">
    import type { IRepository } from "$lib/types";

    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ fetch }) {
        try {
            const res = await fetch("https://api.github.com/users/joehoel/starred");
            const data: IRepository[] = await res.json();

            const projects: IRepository[] = await Promise.all(
                data?.filter((project) => project.owner.login === "Joehoel"),
            );

            return {
                props: {
                    projects,
                },
            };
        } catch (e) {
            console.error(e);

            return {
                props: {
                    projects: [],
                },
            };
        }
    }
</script>

<script lang="ts">
    import Project from "$lib/components/Project.svelte";

    export let projects: IRepository[];
</script>

<h1 class="text-5xl font-bold my-10 inline-block text-base-content">Projects</h1>
<span class="mx-4 text-base-200 font-mono text-xs font-bold">({projects.length})</span>

<p class="mb-6">This is a list of projects I have done in the past or am still working on.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#if projects.length > 0}
        {#each projects as { name, description, html_url }}
            <Project {name} {description} url={html_url} />
        {/each}
    {:else}
        <p class="text-base-content">Something went wrong...</p>
    {/if}
</div>
