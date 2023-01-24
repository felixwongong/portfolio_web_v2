import {writable} from "svelte/store";

const isInEdit = writable<boolean>(false);

export {isInEdit};