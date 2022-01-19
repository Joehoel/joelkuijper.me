<script lang="ts">
    import SocialLinkList from "$lib/components/SocialLinkList.svelte";
</script>

<div class="flex flex-row justify-between mt-20">
    <h1 class="text-5xl md:text-6xl font-mono leading-snug">
        Hey! <br />I'm Joël, <br />Fullstack Developer
    </h1>

    <img src="me.jpg" alt="Me" class="rounded w-1/3 hidden md:block md:w-1/5 shadow-md" />
</div>

<p class="md:w-1/2 mt-4">
    Hallo ik ben Joël ik ben 2 meter lang en dat is één van mijn twee talenten. Wat is de andere? Oh iets met goed zijn
    in programmeren en designen ofzo idk niet belangrijk
</p>

<div class="flex space-x-4 mt-10">
    <SocialLinkList />
</div>
