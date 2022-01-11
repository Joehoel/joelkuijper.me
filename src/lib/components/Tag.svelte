<script lang="ts">
    export let color: Color;

    type Color = keyof typeof colors;

    const colors = {
        purple: "bg-purple-200 text-purple-500 dark:bg-purple-800 dark:text-purple-200",
        green: "bg-green-200 text-green-500 dark:bg-green-800 dark:text-green-200",
        red: "bg-red-200 text-red-500 dark:bg-red-800 dark:text-red-200",
        blue: "bg-blue-200 text-blue-500 dark:bg-blue-800 dark:text-blue-200",
        yellow: "bg-yellow-200 text-yellow-500 dark:bg-yellow-800 dark:text-yellow-200",
        orange: "bg-orange-200 text-orange-500 dark:bg-orange-800 dark:text-orange-200",
        pink: "bg-pink-200 text-pink-500 dark:bg-pink-800 dark:text-pink-200",
        gray: "bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-200",
        indigo: "bg-indigo-200 text-indigo-500 dark:bg-indigo-800 dark:text-indigo-200",
        cyan: "bg-cyan-200 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200",
        teal: "bg-teal-200 text-teal-500 dark:bg-teal-800 dark:text-teal-200",
        brown: "bg-brown-200 text-brown-500 dark:bg-brown-800 dark:text-brown-200",
    };
</script>

<span class={`${colors[color]} rounded-md px-2 text-sm font-semibold shadow`}>
    <slot />
</span>
