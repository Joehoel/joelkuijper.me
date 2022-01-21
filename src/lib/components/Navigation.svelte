<script lang="ts">
    import { page } from "$app/stores";
    import { createEventDispatcher, onMount } from "svelte";
    import { slide } from "svelte/transition";
    import ThemeToggle from "./ThemeToggle.svelte";

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

<!-- on:blur={() => dispatch("close")} -->
<!-- class="absolute flex flex-col w-full font-semibold uppercase bg-white dark:bg-gray-900 md:flex-row md:text-md md:w-auto md:relative px-6 md:px-0 text-xl md:text-md space-y-2 md:space-y-0 py-4 md:py-0 border-b-2 md:border-none" -->
<nav class="px-2 mx-2">
    <div class="items-stretch hidden lg:flex">
        {#each routes as route}
            <a
                href={route.href}
                class:active={route.href === $page.url.pathname}
                on:click={() => dispatch("close")}
                class="btn btn-ghost btn-sm rounded-btn"
            >
                {route.name}
            </a>
        {/each}
    </div>

    <ThemeToggle />

    <div class="dropdown dropdown-end lg:hidden">
        <div class="flex-none ml-2">
            <button class="btn btn-square btn-ghost" tabindex="0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-6 h-6 stroke-current"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
        <div class="menu dropdown-content bg-base-100 rounded-box w-52 shadow mt-2" tabindex="0">
            {#each routes as route}
                <a
                    href={route.href}
                    class:active={route.href === $page.url.pathname}
                    on:click={() => dispatch("close")}
                    class="btn btn-ghost btn-lg rounded-btn"
                >
                    {route.name}
                </a>
            {/each}
        </div>
    </div>
</nav>
