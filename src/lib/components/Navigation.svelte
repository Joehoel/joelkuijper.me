<script lang="ts">
    import { page } from "$app/stores";
    import { media } from "$lib/stores/media";
    import { createEventDispatcher, onMount } from "svelte";
    import { slide } from "svelte/transition";

    const dispatch = createEventDispatcher();

    onMount(() => {
        window.addEventListener("resize", () => dispatch("close"));
    });

    const routes = [
        { href: "/", name: "home" },
        { href: "/projects", name: "project" },
        { href: "/contact", name: "contact" },
    ];
</script>

<nav
    class="absolute flex flex-col w-full font-semibold uppercase bg-white dark:bg-gray-900 md:flex-row md:text-md md:w-auto md:relative px-6 md:px-0 text-xl md:text-md space-y-2 md:space-y-0 py-4 md:py-0 border-b-2 md:border-none"
    on:blur={() => dispatch("close")}
    transition:slide
>
    {#each routes as route}
        <a
            href={route.href}
            class:active={route.href === $page.path}
            on:click={() => dispatch("close")}
            class="px-2 py-1 mr-10 hover:text-brand active:text-brand focus:text-brand"
        >
            {route.name}
        </a>
    {/each}
</nav>
