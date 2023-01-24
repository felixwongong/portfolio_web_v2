<script lang="ts">
    import {getContext} from "svelte";
    import {ContextKey} from "../ContextKey";
    import { ColorRepresentation, DirectionalLight, Scene} from "three";
    import type {Writable} from "svelte/store";

    const scene = getContext<Writable<Scene>>(ContextKey.SCENE);

    export let color: ColorRepresentation = 0x404040;
    export let intensity: number = 6;

    const light = new DirectionalLight(color, intensity); // soft white light
    $scene.add(light)
</script>