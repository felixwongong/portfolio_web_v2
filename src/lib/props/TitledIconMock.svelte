<script lang="ts">
    import {Motion} from "svelte-motion";

    import Fa from "svelte-fa";

    import {onMount, setContext} from "svelte";
    import {MockItem, Icon} from "$lib/props";

    export let title = "Default title";
    export let icons = [];
    export let iconType = "fa";
    export let scrollMotion;

    let area;

    let level;
    let yPercent

    onMount(() => {
        level = Math.floor(icons.length / 3) + 1;
        yPercent = 100 / (level + 1) * 0.7;
    })
</script>

<MockItem motion="{scrollMotion}">
    <div class="w-full h-full flex flex-col touch-none select-none">
        <h2 class="text-center md:text-3xl text-2xl dark:text-primary-content">{title}</h2>
        <div bind:this={area} class="flex-1 relative">
            {#each icons as icon, i}
                <Motion drag dragConstraints={{current:area}} let:motion>
                    <Icon top="{Math.ceil((i + 1) / 3) * yPercent}"
                          left="{(i % 3 + 1) * 25}"
                          iconType="{iconType}"
                          icon="{icon}"
                          motion="{motion}"
                    />
                </Motion>
            {/each}
        </div>
    </div>
</MockItem>
