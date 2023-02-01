<script lang="ts">
    import {onMount} from "svelte";
    import {Icon, MockItem} from "$lib/props";

    export let title = "Default title";
    export let icons = [];
    export let iconObjs = [];
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
                <Icon top="{Math.ceil((i + 1) / 3) * yPercent}"
                      left="{(i % 3 + 1) * 25}"
                      iconType="{iconType}"
                      icon="{icon}"
                      movableArea={area}
                />
            {/each}
            {#each iconObjs as iconObj, i}
                <Icon top="{Math.ceil((i + 1) / 3) * yPercent}"
                      left="{(i % 3 + 1) * 25}"
                      iconType="{iconType}"
                      icon="{iconObj.icon}"
                      title="{iconObj.title}"
                      href="{iconObj.href}"
                      hrefName="{iconObj.hrefName}"
                      movableArea={area}
                />
            {/each}
        </div>
    </div>
</MockItem>
