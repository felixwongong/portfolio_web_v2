<script>
import Hero from "./Hero.svelte";
import EmoBar from "$lib/props/EmoBar.svelte";
import Message from "$lib/props/Message.svelte";
import Playground from "$lib/props/Playground.svelte";
import MockSection from "$lib/props/MockSection.svelte";
import ParticlesBG from "$lib/props/ParticlesBG.svelte";
import TypingMockItem from "../lib/props/TypingMockItem.svelte";
import MockItem from "../lib/props/MockItem.svelte";

</script>

<Hero />

<div class="divider max-w-screen-sm mx-auto">I AM DIVIDER 1</div>

<Playground />

<div class="divider max-w-screen-sm mx-auto">HI DIVIDER 1</div>

<MockSection class="relative">
    <ParticlesBG />
    <div class="absolute top-0 left-0  w-full h-full my-auto mx-auto overflow-visible">
        <TypingMockItem/>
        <MockItem>
            <h2 class="text-center text-3xl">2222222222222222</h2>
        </MockItem>

    </div>
</MockSection>


<EmoBar class="absolute bottom-0 right-1/4 left-1/2"/>
<Message />


