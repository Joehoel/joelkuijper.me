<script lang="ts">
    export let link: string;
</script>

<a
    class="flex items-center space-x-1 text-sm font-semibold tracking-wider hover:underline dark:text-gray-100 dark:hover:text-brand hover:text-brand"
    href={link}
    target="_blank"
>
    <slot name="icon" />
    <span>
        <slot />
    </span>
</a>
