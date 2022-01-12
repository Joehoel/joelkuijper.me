<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
    <title>Joël Kuijper</title>
    <meta content="Fullstack Web Developer" name="description" />
</svelte:head>

<Header />
<main class="max-w-7xl mx-auto px-8">
    <slot />
</main>
