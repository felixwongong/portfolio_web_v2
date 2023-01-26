<script lang="ts">
    import {PerspectiveCamera} from "three";
    import {getContext} from "svelte";
    import {ContextKey} from "./ContextKey";
    import type {Writable} from "svelte/store";
    import type {ComponentFunc} from "./ComponentClass/Component";
    import {TransformComp} from "./ComponentClass";

    const cameraStore: Writable<PerspectiveCamera> = getContext(ContextKey.CAM_STORE);
    const {GetComponent} = getContext<ComponentFunc>(ContextKey.COMP_FUNC);

    const transform = GetComponent<TransformComp>(TransformComp.name);

    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    export let camera;
    camera = new PerspectiveCamera(fov, aspect, near, far);

    camera.position.z = 2.5;
    camera.position.y = 0.5;

    cameraStore.set(camera);
</script>