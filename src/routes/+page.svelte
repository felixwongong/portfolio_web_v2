<script>
import Hero from "./Hero.svelte";
import EmoBar from "$lib/props/EmoBar.svelte";
import Message from "$lib/props/Message.svelte";
import Playground from "$lib/props/Playground.svelte";
import MockSection from "$lib/props/MockSection.svelte";
import ParticlesBG from "$lib/props/ParticlesBG.svelte";

import Typewriter from 'typewriter-effect/dist/core';
import {onMount} from "svelte";

onMount(() => {
    const htmlEl = document.querySelector("#typewriter");

    let typewriter = new Typewriter("#typewriter", {
        delay: 75,
    });

    let observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            typewriter
                .deleteAll()
                .typeString('Debug.log($env.MY_MESSAGE)')
                .pauseFor(3000)
                .deleteAll(0.0000000000000000000001)
                .pasteString("<h3>Hello Universe!\n</h3><h3>Welcome to my site!</h3>")
                .pauseFor(2000)
                .start();
        }
    }, { threshold: [1] });

    observer.observe(htmlEl);
})
</script>

<Hero />

<div class="divider max-w-screen-sm mx-auto">I AM DIVIDER 1</div>

<Playground />

<div class="divider max-w-screen-sm mx-auto">HI DIVIDER 1</div>

<MockSection class="relative">
    <ParticlesBG />
    <div class="absolute top-0 left-0  w-full h-full my-auto mx-auto flex justify-center items-center">
        <h2 id="typewriter" class="text-center text-3xl my-auto mx-auto"></h2>
    </div>
</MockSection>


<EmoBar class="absolute bottom-0 right-1/4 left-1/2"/>
<Message />


