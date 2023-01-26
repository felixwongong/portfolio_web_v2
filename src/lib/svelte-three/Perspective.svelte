<script lang="ts">
    import {Euler, PerspectiveCamera, Vector3} from "three";
    import {getContext} from "svelte";
    import {ContextKey} from "./ContextKey";
    import type {Writable} from "svelte/store";
    import type {ComponentFunc} from "./ComponentClass/Component";
    import {TransformComp} from "./ComponentClass";

    const cameraStore: Writable<PerspectiveCamera> = getContext(ContextKey.CAM_STORE);
    const {GetComponent} = getContext<ComponentFunc>(ContextKey.COMP_FUNC);

    const {Update} = getContext(ContextKey.HOOK);



    const transform = GetComponent<TransformComp>(TransformComp.name);

    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    export let camera;
    export let position: Vector3 = new Vector3(0, 0.5, 2.5);
    export let rotation: Euler = new Euler();

    camera = new PerspectiveCamera(fov, aspect, near, far);

    camera.position.set(...position);
    camera.rotation.set(...rotation);

    cameraStore.set(camera);
</script>