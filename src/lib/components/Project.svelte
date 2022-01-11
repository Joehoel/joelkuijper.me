<script lang="ts">
	export let name: string;
	export let description: string;
	export let url: string;
	export let tags: string[];
</script>

<article class="space-y-2 border rounded-md px-4 py-6 flex flex-col justify-center">
	<h2 class="text-2xl font-bold">{name}</h2>
	<p>{description}</p>
	<a href={url} class="text-brand" target="_blank">Link</a>
	{#each tags as tag}
		<span>{tag}</span>
	{/each}
</article>
