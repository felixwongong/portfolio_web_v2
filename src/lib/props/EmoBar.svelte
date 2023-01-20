<script>
    import {onMount} from "svelte";

    import core from "asciimoticon-core";

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
    onMount(() => {
            setEmoticon();

            interval = CreateInterval();
        }
    )

</script>

<div
        class="max-w-screen-sm bottom-center py-1 overflow-visible {$$props.class}"
>
    <ul class="mx-auto max-w-md flex flex-row justify-center">
        {#each emoticonProps as prop}
            <li class="w-3.5">
                <h6 class="dark:text-yellow-300 {prop.hasPopped ? 'anim_popOut' : ''}">
                    {prop.icon}
                </h6>
            </li>
        {/each}
    </ul>
</div>


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
        bottom: 7%;
        right: 30%;
        left: 30%;
    }
</style>
