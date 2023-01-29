<script>
    import {faUnity} from "@fortawesome/free-brands-svg-icons";

    import Hero from "./Hero.svelte";
    import {EmoBar, Message, MockSection, ParticlesBG, Playground} from "$lib/props";

    import {AnimatePresence, Motion} from "svelte-motion";
    import MockItem from "../lib/props/MockItem.svelte";
    import TypingMockItem from "../lib/props/TypingMockItem.svelte";
    import TitledIconMock from "../lib/props/TitledIconMock.svelte";

    import Unity from "$lib/assets/icons/unity.png";
    import Unreal from "$lib/assets/icons/unreal.png";
    import Node from "$lib/assets/icons/node.png";


    let isOn = 0;

    const direction = 1;
    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
            };
        },
    };
    const wrap = (a, l) => {
        const u = a % l;
        if (u < 0) {
            return u + l;
        }
        return u;
    };
    let c = 1;

</script>

<Hero/>

<div class="divider max-w-screen-sm mx-auto">I AM DIVIDER 1</div>

<Playground/>

<div class="divider max-w-screen-sm mx-auto">I GO TO SCHOOL BY BUS</div>

<MockSection class="relative">
    <ParticlesBG/>
    <div class="absolute top-0 left-0  w-full h-full my-auto mx-auto overflow-hidden">
        <div class="absolute top-1/2 -translate-y-full w-full flex justify-between z-50 px-1.5 pointer-events-none">
            <button class="btn btn-circle pointer-events-auto" on:click={() => { c = -1; isOn--;}}>{'<'}</button>
            <button class="btn btn-circle pointer-events-auto" on:click={() => { c = 1; isOn++;}}>{'>'}</button>
        </div>
        <AnimatePresence
                exitBeforeEnter
                let:item
                list={[{ key: isOn}]}
        >
            <Motion
                    animate="center"
                    custom={c}
                    exit="exit"
                    initial="enter"
                    let:motion
                    transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                    {variants}>
                {#if Math.abs(isOn) % 3 === 0}
                    <TypingMockItem motion="{motion}"/>
                {:else if Math.abs(isOn) % 3 === 1}
                    <TitledIconMock scrollMotion="{motion}" icons="{[Unity, Unreal, Node]}" iconType=""></TitledIconMock>
                {:else}
                    <MockItem motion="{motion}">You want to see what in here~?</MockItem>
                {/if}
            </Motion>
        </AnimatePresence>
    </div>

</MockSection>


<EmoBar class="absolute bottom-0 right-1/4 left-1/2"/>
<Message/>


