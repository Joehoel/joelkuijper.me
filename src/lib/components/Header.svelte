<script>
	import Navigation from "$lib/components/Navigation.svelte";
	import ThemeToggle from "$lib/components/ThemeToggle.svelte";
</script>

<header class="max-w-7xl mx-auto px-8 flex justify-between items-center border-b-2">
	<h1 class="text-2xl font-mono font-bold tracking-tighter">JK</h1>

	<div class="flex flex-row items-center">
		<Navigation />

		<ThemeToggle />
	</div>
</header>
