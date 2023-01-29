<script lang="ts">
    import {OrbitControls} from "../three/OrbitControls.js";
    import {getContext, onDestroy} from "svelte";
    import {ContextKey} from "../ContextKey";
    import type {Writable} from "svelte/store";
    import {PerspectiveCamera} from "three";
    import type {Renderer} from "three";
    import type {EventFunc} from "../Hooks";
    import {EMode, Mode} from "../Setting/Setting.ts";

    const camera: Writable<PerspectiveCamera> = getContext(ContextKey.CAM_STORE);
    const {Start, Update} = getContext<EventFunc>(ContextKey.HOOK);
    const renderer: Writable<Renderer> = getContext(ContextKey.RENDER_STORE);

    let control:OrbitControls;

    Start(() => {
        control = new OrbitControls($camera, $renderer.domElement);

        Mode.subscribe((value) => {
            const isObject = value === EMode.VIEW;
            control.enabled = isObject;
        })
    })


    Update(() => {
        control.update();
    })

    onDestroy(() => {
        control?.dispose();
    })
</script>