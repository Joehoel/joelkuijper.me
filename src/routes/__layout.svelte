<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <title>Joël Kuijper</title>
    <meta content="Fullstack Web Developer" name="description" />
</svelte:head>

<Header />
<main class="mx-auto px-8 flex-grow container">
    <slot />
</main>
