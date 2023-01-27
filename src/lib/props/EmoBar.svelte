<script>
    import {onMount} from "svelte";

    import core from "asciimoticon-core";
    import Motion from 'svelte-motion/src/motion/MotionSSR.svelte'

    let emoticonProps = [], popIntervalTime = 1000, emoticonSet = core.faces, curEmoticon = null;

    function setEmoticon() {
        const keys = Object.keys(emoticonSet);
        curEmoticon =
            emoticonSet[keys[(keys.length * Math.random()) << 0]].ascii;
        emoticonProps = [];
        for (let i = 0; i < curEmoticon.length; i++) {
            emoticonProps.push({
                id: i,
                icon: "•",
                hasPopped: false,
            });
        }
    }

    function CreateInterval() {
        return setInterval(() => {
            if (curPopIndex < emoticonProps.length) {
                emoticonProps[curPopIndex].icon = curEmoticon[curPopIndex];
                emoticonProps[curPopIndex].hasPopped = true;
            } else {
                endCount++;
                if (endCount >= 5) {
                    clearInterval(interval);
                    setEmoticon();
                    curPopIndex = 0;
                    interval = CreateInterval()
                }
            }
            curPopIndex++;
        }, popIntervalTime)
    }

    let curPopIndex = 0;
    let endCount = 0;
    let interval = null;

    function ScrollSection() {
        const sections = document.querySelectorAll("section");
        curV = "hidden";
        setTimeout(() => curV = "visible", 500)
        let i;
        for (i = 0; i < sections.length; i++) {
            if (window.pageYOffset + window.innerHeight / 2 < sections[i].offsetTop) {
                sections[i].scrollIntoView({
                    behavior: "smooth"
                })
                break;
            }
        }
        if (i === sections.length) {
            sections[0].scrollIntoView({
                behavior: "smooth"
            })
        }
    }

    const variants = {
        hidden: {scale: 0, opacity: 0, x: "-50%", y: "10vh" },
        visible: {scale: 1, opacity: 1, x: "-50%", y: 0}
    }

    let curV = "hidden";

    onMount(() => {
            setEmoticon();

            interval = CreateInterval();
            curV = "visible"
        }
    )


</script>

<Motion animate={curV} initial="hidden" let:motion transition={{ duration: .3 }} {variants}>
    <div
            class="max-w-screen-xs w-fit bottom-center z-10 py-1 overflow-visible emo-btn btn-primary drop-shadow-lg {$$props.class}"
            use:motion
            on:click={ScrollSection}
    >
        <ul class="mx-auto max-w-md flex flex-row justify-center">
            {#each emoticonProps as prop}
                <li class="w-3.5">
                    <h6 class="dark:text-yellow-300 font-bold {prop.hasPopped ? 'anim_popOut' : ''}">
                        {prop.icon}
                    </h6>
                </li>
            {/each}
        </ul>
        <div>⬇️</div>
    </div>
</Motion>


<style>
    @keyframes popOut {
        0% {
            transform: scaleX(0.4);
        }
        25% {
            transform: scaleX(0.6);
        }
        50% {
            transform: scaleX(0.8);
        }
        100% {
            transform: scaleX(1);
        }
    }

    .anim_popOut {
        animation-name: popOut;
        animation-duration: 0.15s;
        animation-timing-function: linear;
    }


    .bottom-center {
        position: fixed;
        bottom: 7%;
        right: 50%;
    }

    .emo-btn {
        border-radius: 0.5rem;
        padding: 0.25rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }
</style>
