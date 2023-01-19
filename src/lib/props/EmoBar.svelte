<script>
    import {onMount} from "svelte";

    import core from "asciimoticon-core";

    let emoticonProps = [];
    let popIntervalTime = 1000;
    let emoticonSet = core.faces;
    let curEmoticon = null;

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
        return  setInterval(() => {
                if (curPopIndex < emoticonProps.length) {
                    emoticonProps[curPopIndex].icon = curEmoticon[curPopIndex];
                    console.info(emoticonProps);
                }else {
                    endCount++;
                    console.log(`end: ${endCount}`)
                    if(endCount >= 5) {
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
        class="max-w-screen-sm mx-auto border-t-2 border-b-2 border-dark dark:border-orange border-dashed py-2"
>
    <ul class="mx-auto max-w-md flex flex-row justify-center">
        {#each emoticonProps as prop}
            <li class="text-3xl w-8">
                <h2 class="dark:text-yellow-300 {prop.hasPopped ? 'anim_popOut' : ''}">
                    {prop.icon}
                </h2>
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
</style>
