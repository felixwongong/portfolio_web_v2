<script lang="ts">
    import Fa from "svelte-fa";
    import {Motion} from "svelte-motion";

    export let movableArea;
    export let top;
    export let left;
    export let iconType = "fa";
    export let icon;
    export let tooltipTitle = ""
    export let href = "#";


    let showTooltip = "hidden";
    $:v = showTooltip;
    let variants = {
        visible: {opacity: 1, scale: 1},
        hidden: {opacity: 0, scale: 0},
    }
</script>


<Motion drag dragConstraints={{current: movableArea}} let:motion
        onDragStart={_ => {
            showTooltip = "hidden";
        }}
>
    <div class="w-14 aspect-square absolute overflow-visible" on:click={() => {
         showTooltip = showTooltip === "hidden" ? "visible": "hidden";
     }}
         style="top: {top}%; left: {left}%"
         use:motion
    >
        {#if iconType === "fa"}
            <Fa icon="{icon}" size="2.5x" scale="{1.5}"></Fa>
        {:else}
            <div>
                <img src="{icon}" alt="tool" class="pointer-events-none"/>
            </div>
        {/if}

        {#if tooltipTitle}
            <Motion animate={v} initial="hidden" let:motion {variants}>
                <div class="bg-white absolute w-36 h-auto text-center origin-bottom" style="top: {-100}%; left: {-60}%"
                     use:motion>
                    <div>{tooltipTitle}</div>
                    <a href="{href}">Some redirect link</a>
                </div>
            </Motion>
        {/if}
    </div>
</Motion>
