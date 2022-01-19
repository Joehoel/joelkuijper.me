import { onMount } from "svelte";

//export a function that return a readable given a string media query as input
export const media = (query: string) => {
    let mql: MediaQueryList;
    let mqlListener;
    let wasMounted = false;
    let matches = false;

    onMount(() => {
        wasMounted = true;
        return () => {
            removeActiveListener();
        };
    });

    $: {
        if (wasMounted) {
            removeActiveListener();
            addNewListener(query);
        }
    }

    function addNewListener(query) {
        mql = window.matchMedia(query);
        mqlListener = (v) => (matches = v.matches);
        mql.addListener(mqlListener);
        matches = mql.matches;
    }

    function removeActiveListener() {
        if (mql && mqlListener) {
            mql.removeListener(mqlListener);
        }
    }

    return matches;
};
