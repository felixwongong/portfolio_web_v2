<script lang="ts">
    import {onMount} from "svelte";
    import Canvas from "$lib/svelte-three/Canvas.svelte";

    let pixelRatio = 0.75;
    let spin = 0;

    onMount(() => {
    })

</script>

<section class="h-screen w-full">
    <Canvas class="w-screen h-screen"></Canvas>
</section>