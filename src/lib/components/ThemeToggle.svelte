<script>
	import { onMount } from "svelte";

	onMount(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	});

	function toggleDarkMode() {
		if (document.documentElement.classList.toggle("dark")) {
			localStorage.setItem("theme", "dark");
		} else {
			localStorage.removeItem("theme");
		}
	}
</script>

<button class="px-3 py-1 rounded-md border" on:click={() => toggleDarkMode()}>O</button>
