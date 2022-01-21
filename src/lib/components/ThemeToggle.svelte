<script lang="ts">
    import { onMount } from "svelte";
    import { themeChange } from "theme-change";

    onMount(async () => {
        themeChange(false);
    });
</script>

<!-- <DarkMode bind:theme /> -->

<select data-choose-theme class="select select-bordered select-primary bg-base-100 select-md text-base-content ml-2">
    <option disabled={true} selected={true}>Choose a theme</option>
    <option value="aqua">Aqua</option>
    <option value="black">Black</option>
    <option value="bumblebee">Bumblebee</option>
    <option value="corporate">Corporate</option>
    <option value="cupcake">Cupcake</option>
    <option value="cyberpunk">Cyberpunk</option>
    <option value="dark">Dark</option>
    <option value="dracula">Dracula</option>
    <option value="emerald">Emerald</option>
    <option value="fantasy">Fantasy</option>
    <option value="forest">Forest</option>
    <option value="garden">Garden</option>
    <option value="halloween">Halloween</option>
    <option value="light">Light</option>
    <option value="lofi">Lofi</option>
    <option value="luxury">Luxury</option>
    <option value="pastel">Pastel</option>
    <option value="retro">Retro</option>
    <option value="synthwave">Synthwave</option>
    <option value="valentine">Valentine</option>
    <option value="wireframe">Wireframe</option>
</select>
<!-- <button
    class="px-3 py-1 rounded-md border-2 hover:text-brand hover:border-brand"
    on:click={() => (theme = switchTheme)}
>
    {#if theme === "dark"}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
        </svg>
    {/if}
</button> -->
