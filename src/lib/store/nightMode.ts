import { writable } from "svelte/store";
import { browser } from "$app/environment";

let isNightMode = writable(0);

if(browser && localStorage.getItem("data-theme") != null) {
    // @ts-ignore
    isNightMode = writable(Number(localStorage.getItem("data-theme")));
}

isNightMode.subscribe(val => {
    if(browser && val != null) {
        // @ts-ignore
        localStorage.setItem("data-theme", String(val));
    }
})

export {isNightMode}