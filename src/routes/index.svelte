<script lang="ts">
    import SocialLink from "$lib/components/SocialLink.svelte";
    import { GithubFill, LinkedinBoxFill, TwitterFill } from "svelte-remixicon";
</script>

<div class="flex justify-between mt-20">
    <h1 class="text-6xl font-mono leading-snug">
        Hey! <br />I'm Joël, <br />Fullstack Developer
    </h1>

    <img src="me.jpg" alt="Me" class="rounded w-1/5 shadow-md" />
</div>

<p class="w-1/2 mt-4">
    Hallo ik ben Joël ik ben 2 meter lang en dat is één van mijn twee talenten. Wat is de andere? Oh iets met goed zijn
    in programmeren en designen ofzo idk niet belangrijk
</p>

<div class="flex space-x-4 mt-10">
    <SocialLink link="https://github.com/joehoel">
        <GithubFill slot="icon" />
        Github
    </SocialLink>

    <SocialLink link="https://www.linkedin.com/in/jo%C3%ABl-kuijper-777299206/">
        <LinkedinBoxFill slot="icon" />
        LinkedIn
    </SocialLink>

    <SocialLink link="https://twitter.com/joel_kuijper">
        <TwitterFill slot="icon" />
        Twitter
    </SocialLink>
</div>
