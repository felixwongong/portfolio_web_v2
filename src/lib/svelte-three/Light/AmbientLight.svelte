<script lang="ts">
    import {getContext} from "svelte";
    import {ContextKey} from "../ContextKey";
    import {AmbientLight, Scene} from "three";
    import type {ColorRepresentation} from "three";
    import type {Writable} from "svelte/store";

    const scene = getContext<Writable<Scene>>(ContextKey.SCENE_STORE);

    export let color: ColorRepresentation = 0x404040;
    export let intensity: number = 6;

    const light = new AmbientLight(color, intensity); // soft white light
    $scene.add(light)
</script>