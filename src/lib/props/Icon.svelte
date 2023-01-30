<script lang="ts">
    import Fa from "svelte-fa";
    import {Motion} from "svelte-motion";

    export let motion;
    export let top;
    export let left;
    export let iconType = "fa";
    export let icon;
    export let tooltipTitle = "This is default title"
    export let href = "#";


    let showTooltip = false;
    let tooltipStyle = {

    }
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
    <Motion initial="{false}" animate="{showTooltip}">
        <div class="bg-white absolute w-36 h-auto text-center" style="top: {-100}%; left: {-60}%">
            <div>{tooltipTitle}</div>
            <a href="{href}">Some redirect link</a>
        </div>
    </Motion>
</div>
