<script>
	import { page } from "$app/stores";

	const routes = [
		{ href: "/", name: "Home" },
		{ href: "/projects", name: "Projects" },
		{ href: "/about", name: "About" },
	];
</script>

<nav>
	{#each routes as route}
		<a href={route.href} class:active={route.href === $page.path}>
			{route.name}
		</a>
	{/each}
</nav>

<style lang="scss">
	nav {
		display: flex;
	}
</style>
