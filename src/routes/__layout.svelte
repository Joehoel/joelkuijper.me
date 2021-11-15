<script>
	import "$lib/styles/index.scss";
	import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
	<title>Joël Kuijper</title>
	<meta content="Fullstack Web Developer" name="description" />
</svelte:head>

<Header />

<slot />

<style lang="scss">
</style>
