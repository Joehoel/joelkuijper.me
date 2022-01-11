<script>
    import { page } from "$app/stores";

    const routes = [
        { href: "/", name: "home" },
        { href: "/projects", name: "project" },
        { href: "/contact", name: "contact" },
    ];
</script>

<nav class="flex text-md font-semibold uppercase">
    {#each routes as route}
        <a
            href={route.href}
            class:active={route.href === $page.path}
            class="py-4 px-2 mr-10 hover:text-brand active:text-brand focus:text-brand"
        >
            {route.name}
        </a>
    {/each}
</nav>
