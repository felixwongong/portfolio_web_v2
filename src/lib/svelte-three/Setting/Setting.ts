import {writable} from "svelte/store";

class EMode {
    static VIEW = "View"
    static OBJECT = "Object"
}

const Mode = writable<string>(EMode.VIEW);

export {EMode, Mode};