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
        if (newVal) {
            html.classList.add("dark");
            html.setAttribute("data-theme", "luxary")
        } else{
            html.classList.remove("dark");
            html.setAttribute("data-theme", "retro")
        }
    }

    onMount(() => {
        setDarkMode(get(isNightMode))
    });
</script>

<div class="absolute navbar bg-base-100">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="/">Work</a></li>
                <li><a href="/">Post</a></li>
            </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl" href="/">Felix Wong☕</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <div class="tooltip tooltip-bottom tooltip-info" data-tip="Not available yet😢">
                <li><a href="/">🧑🏼‍💻Work</a></li>
            </div>
            <div class="tooltip tooltip-bottom tooltip-info" data-tip="Not available yet😢">
                <li><a href="/">📖Post</a></li>
            </div>
        </ul>
    </div>
    <div class="navbar-end">
        <div class="navbar-end w-10 h-10 my-auto bg-base-100 dark:bg-secondary rounded" on:click={toggleNightMode}>
            <img src={$isNightMode ? moon: sun} alt="toggleNightMode" class="object-scale-down">
        </div>
    </div>
</div>