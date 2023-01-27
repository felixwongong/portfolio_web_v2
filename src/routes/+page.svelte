<script>
    import Hero from "./Hero.svelte";
    import {EmoBar, Message, MockSection, ParticlesBG, Playground} from "$lib/props";

    import {AnimatePresence, Motion} from "svelte-motion";
    import MockItem from "../lib/props/MockItem.svelte";
    import TypingMockItem from "../lib/props/TypingMockItem.svelte";

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

<style>
    img {
        top: 1rem;
        max-width: 95%;
        max-height: calc(100% - 6rem);
        position: absolute;
    }
</style>

<Hero/>

<div class="divider max-w-screen-sm mx-auto">I AM DIVIDER 1</div>

<Playground/>

<div class="divider max-w-screen-sm mx-auto">HI DIVIDER 1</div>

<MockSection class="relative">
    <ParticlesBG/>
    <div class="absolute top-0 left-0  w-full h-full my-auto mx-auto overflow-hidden">
        <AnimatePresence
                let:item
                list={[{ key: isOn}]}
                exitBeforeEnter
        >
            <Motion
                    animate="center"
                    custom={c}
                    exit="exit"
                    initial="enter"
                    let:motion
                    transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                    {variants}>
                <!--                <img alt="example" src={item.text} use:motion/>-->
                {#if isOn % 3 !== 0}
                    <MockItem motion="{motion}">{isOn % 3}</MockItem>
                {:else }
                    <TypingMockItem motion="{motion}"/>
                {/if}
            </Motion>
        </AnimatePresence>
    </div>

</MockSection>

<div>
    <button
            on:click={() => {
            c = -1;
            isOn--;
            console.log(isOn)
        }}>{'prev'}
    </button>
    <button
            on:click={() => {
            c = 1;
            isOn++;
            console.log(isOn)
        }}>{'next'}</button>
</div>

<EmoBar class="absolute bottom-0 right-1/4 left-1/2"/>
<Message/>


