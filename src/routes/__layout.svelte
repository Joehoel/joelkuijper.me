<script>
	import "../styles/global.scss";
	import Navigation from "$lib/components/Navigation.svelte";
</script>

<svelte:head>
	<title>Joël Kuijper</title>
	<meta content="Fullstack Web Developer" name="description" />
</svelte:head>

<Navigation />

<slot />
