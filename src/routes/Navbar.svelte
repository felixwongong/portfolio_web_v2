<script lang="ts">
    import sun from "$lib/assets/icons/sun.gif";
    import moon from "$lib/assets/icons/moon.gif";
    import {isNightMode} from "$lib/store/nightMode";
    import {onMount} from "svelte";
    import {get} from "svelte/store";

    const navHeight: String = "h-16"

    function toggleNightMode() {
        isNightMode.update(val => {
            const newVal = 1 - val;
            setDarkMode(newVal);
            return 1 - val;
        })
    }

    function setDarkMode(newVal: number) {
        const html = document.querySelector("html");
        if (newVal) html.classList.add("dark"); else html.classList.remove("dark");
    }

    onMount(() => {
        setDarkMode(get(isNightMode))
    });
</script>
<div>
    <div class="fixed top-0 left-0 w-screen {navHeight} z-50 bg-white border-b-2 border-black">
        <nav class="max-w-screen-md h-full mx-auto flex flex-row align-middle justify-between">
            <a href="/"
               class="text-primary-dark font-bold text-lg antialiased flex flex-row items-center dark:bg-darkSecondary px-2 rounded-md">
                <h2>Felix Wong</h2>
            </a>
            <ul class="flex flex-row justify-evenly items-center">
                <li class="mx-3 text-primary-dark tracking-wider">
                    <a href="/Work" class="py-0.5 border-transparent border-b-2 hover:border-gray-600">Work</a>
                </li>
                <li class="mx-3 text-primary-dark tracking-wider">
                    <a href="/Post" class="py-0.5 border-transparent border-b-2 hover:border-gray-600">Post</a>
                </li>
            </ul>
            <div class="w-10 h-10 my-auto" on:click={toggleNightMode}>
                <img src={$isNightMode ? moon: sun} alt="toggleNightMode" class="object-scale-down">
            </div>
        </nav>
    </div>
    <!-- This is a padding for fixed navbar -->
<!--    <div class="w-full {navHeight}">-->
<!--    </div>-->
</div>

