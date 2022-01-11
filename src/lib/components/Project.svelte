<script lang="ts">
    import { capitalize } from "$lib/utils/capitalize";
    import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
    // import Tag from "./Tag.svelte";

    export let name: string;
    export let description: string;
    export let url: string;
</script>

<article class="shadow border dark:border-gray-800 rounded-md px-4 py-2 flex flex-col justify-center">
    <header class="flex justify-between">
        <h2 class="text-2xl font-bold">{capitalize(name)}</h2>

        <div class="w-10 h-10">
            <a href={url} class="hover:text-brand" target="_blank">
                <DiGithubBadge />
            </a>
        </div>
    </header>

    <p>{description}</p>

    <!-- {#each tags as tag}
        <Tag color="blue">
            {tag}</Tag
        >
    {/each} -->
</article>
