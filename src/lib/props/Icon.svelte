<script lang="ts">
    import {Tooltip} from "$lib/props";
    import Fa from "svelte-fa";

    export let motion;
    export let top;
    export let left;
    export let iconType = "fa";
    export let icon;
</script>

<div use:motion class="w-14 aspect-square absolute overflow-visible"
     style="top: {top}%; left: {left}%"
>
    {#if iconType === "fa"}
        <Fa icon="{icon}" size="2.5x" scale="{1.5}"></Fa>
    {:else}
        <div>
            <img src="{icon}" alt="tool" class="pointer-events-none"/>
        </div>
    {/if}
    <Tooltip active="{false}"></Tooltip>
</div>
