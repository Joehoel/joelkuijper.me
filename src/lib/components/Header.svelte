<script lang="ts">
    import Navigation from "$lib/components/Navigation.svelte";
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import { Menu2Line } from "svelte-remixicon";

    let open = false;
</script>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content w-full">
    <a class="px-2 mx-2 flex-1 text-lg font-bold hover:text-primary-focus" href="/">JK</a>

    <Navigation />
</div>
<!--
<header class="navbar container mx-auto shadow-lg bg-neutral text-neutral-content rounded-box">
    <a href="/"><h1 class="text-2xl font-mono font-bold tracking-tighter hover:text-brand">JK</h1></a>
    <Navigation />
</header> -->
<!--
<header class="max-w-7xl w-full mx-auto px-8 flex justify-between items-center border-b-2 py-2 relative">
    <a href="/"><h1 class="text-2xl font-mono font-bold tracking-tighter hover:text-brand">JK</h1></a>

    <div class="md:flex flex-row items-center hidden">
        <Navigation />

        <ThemeToggle />
    </div>
    <div class="md:hidden space-x-2">
        <ThemeToggle />

        <button
            class="px-3 py-1 rounded-md border-2 hover:text-brand hover:border-brand"
            on:click={() => (open = !open)}
        >
            <Menu2Line class="text-2xl" />
        </button>
    </div>
</header>
{#if open}
    <Navigation on:close={() => (open = false)} />
{/if} -->
