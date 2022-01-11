<script context="module" lang="ts">
	import type { Repository } from "$lib/types";

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, session, stuff }) {
		const res = await fetch("https://api.github.com/users/joehoel/starred");
		const data = await res.json();

		const projects: Repository[] = data.filter(
			(project: Repository) => project.owner.login === "Joehoel",
		);

		console.log(projects);

		return {
			props: {
				projects,
			},
		};
	}
</script>

<script lang="ts">
	import Project from "$lib/components/Project.svelte";

	export let projects: Repository[];
</script>

<h1 class="text-5xl font-bold my-10">Projects</h1>

<div class="grid grid-cols-2 gap-6">
	{#each projects as project}
		<Project
			name={project.name}
			description={project.description}
			tags={["typescript"]}
			url={project.html_url}
		/>
	{/each}
</div>
