<script lang="ts">
    import {Scene} from "three";
    import {getContext, setContext} from "svelte";
    import {ContextKey} from "./ContextKey";
    import type {Writable} from "svelte/store";

    export let scene: Scene;

    scene = new Scene();
    const sceneStore = getContext<Writable<Scene>>(ContextKey.SCENE);
    sceneStore.set(scene);

</script>

<slot></slot>