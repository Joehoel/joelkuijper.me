<script>
	import '../app.scss';
	import { page } from '$app/stores';

	const routes = [
		{ href: '/', name: 'Home' },
		{ href: '/projects', name: 'Projects' },
		{ href: '/about', name: 'About' }
	];
</script>

<svelte:head>
	<title>Joël Kuijper</title>
	<meta content="Fullstack Web Developer" name="description" />
</svelte:head>

<nav>
	{#each routes as route}
		<a href={route.href} class:active={route.href === $page.path}>
			{route.name}
		</a>
	{/each}
</nav>

<slot />

<style lang="scss">
	.active {
		color: gray;
	}
</style>
