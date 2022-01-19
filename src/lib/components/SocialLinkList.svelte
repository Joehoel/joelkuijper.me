<script>
    import { GithubFill, LinkedinBoxFill, TwitterFill } from "svelte-remixicon";
    import SocialLink from "./SocialLink.svelte";
</script>

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
