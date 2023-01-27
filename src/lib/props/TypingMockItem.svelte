<script>
    import Typewriter from 'typewriter-effect/dist/core';
    import {onDestroy, onMount} from "svelte";

    export let motion;

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
                    .pasteString("<h3>Hello Universe\n</h3><h3>Welcome to my site!</h3>")
                    .pauseFor(2000)
                    .start();
            }
        }, { threshold: [1] });

        observer.observe(htmlEl);
    })
</script>

<div class="absolute w-full h-full flex justify-center items-start" use:motion>
    <h2 id="typewriter" class="text-center md:text-3xl text-2xl my-40"></h2>
</div>
