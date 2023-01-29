<script lang="ts">
    import coffee from "$lib/assets/icons/coffee.gif";
    import Motion from 'svelte-motion/src/motion/MotionSSR.svelte'
    import {onMount} from "svelte";

    const variants = {
        hidden: {scale: 0, opacity: 0},
        visible: {scale: 1, opacity: 1}
    }

    let curV = "hidden";

    onMount(() => {
        curV = "visible";

        setTimeout(() => curV = "hidden", 5000)
    })

    function Toggle() {
        curV = curV === "hidden" ? "visible" : "hidden";
    }
</script>

<div class="w-full h-auto chat chat-end absolute bottom-0 p-2 z-20 pointer-events-none">
    <div class="chat-image avatar pointer-events-auto">
        <div class="w-10 rounded-full bg-base-100 dark:bg-secondary rounded">
            <img src="{coffee}" alt="message-box" class="cursor-pointer" on:click={Toggle}/>
        </div>
    </div>

    <Motion animate={curV} initial="hidden" let:motion transition={{ duration: .3 }} {variants}>
        <div class="chat-bubble origin-bottom-right" use:motion>
            <p>I am remaking website!</p>
            <p>becuz I forgot to pay for the old db fee</p>
            <p>Old version: <a class="link-accent" href="https://cofydev.vercel.app/" target="_blank" rel="noopener noreferrer">Vercel link</a></p>
        </div>
    </Motion>
</div>
