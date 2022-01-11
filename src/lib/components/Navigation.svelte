<script>
	import { page } from "$app/stores";

	const routes = [
		{ href: "/", name: "Home" },
		{ href: "/projects", name: "Projects" },
		{ href: "/about", name: "About" },
	];
</script>

<nav class="flex text-lg font-semibold">
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
