<script lang="ts">
    import {PerspectiveCamera} from "three";
    import {getContext} from "svelte";
    import {ContextKey} from "./ContextKey";

    const SetCamera = getContext(ContextKey.SET_CAM);
    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    export let camera;
    camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    SetCamera(camera);
</script>