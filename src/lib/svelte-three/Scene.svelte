<script lang="ts">
    import {Scene} from "three";
    import {getContext, setContext} from "svelte";
    import {ContextKey} from "./ContextKey";

    export let scene: Scene;

    scene = new Scene();
    const SetScene = getContext(ContextKey.SET_SCENE);
    SetScene(scene);
    setContext(ContextKey.SCENE, scene);
</script>

<slot></slot>