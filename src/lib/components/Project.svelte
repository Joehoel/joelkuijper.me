<script lang="ts">
    import { capitalize } from "$lib/utils/capitalize";
    import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";

    export let name: string;
    export let description: string;
    export let url: string;
</script>

<!-- <article class="shadow border dark:border-gray-800 rounded-md px-4 py-2 flex flex-col justify-center"> -->
<article class="card card-bordered card-compact">
    <div class="card-body">
        <header>
            <h2 class="card-title flex justify-between items-center">
                {capitalize(name)}
                <div class="w-10 h-10 inline-block">
                    <a href={url} class="hover:text-brand" target="_blank">
                        <DiGithubBadge />
                    </a>
                </div>
            </h2>
        </header>

        <p>{description}</p>
    </div>
</article>
