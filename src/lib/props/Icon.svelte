<script lang="ts">
    import Fa from "svelte-fa";
    import {Motion} from "svelte-motion";

    export let movableArea;
    export let top;
    export let left;
    export let iconType = "fa";
    export let icon;
    export let title = ""
    export let href = "#";
    export let hrefName = "Link";


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

        {#if title}
            <Motion animate={v} initial="hidden" let:motion {variants}>
                <div class="bg-secondary absolute w-36 h-auto text-center origin-bottom rounded-box" style="top: {-110}%; left: {-100}%"
                     use:motion>
                    <div>{title}</div>
                    <a class="text-info dark:text-black" href="{href}" target="_blank" rel="noopener noreferrer">{hrefName}</a>
                </div>
            </Motion>
        {/if}
    </div>
</Motion>
