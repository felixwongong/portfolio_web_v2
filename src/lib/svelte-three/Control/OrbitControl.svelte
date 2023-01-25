<script lang="ts">
    import {OrbitControls} from "../three/OrbitControls";
    import {getContext} from "svelte";
    import {ContextKey} from "../ContextKey";
    import type {Writable} from "svelte/store";
    import {PerspectiveCamera} from "three";
    import type {Renderer} from "three";
    import type {EventFunc} from "../Hooks";

    const camera: Writable<PerspectiveCamera> = getContext(ContextKey.CAM_STORE);
    const {Update} = getContext<EventFunc>(ContextKey.HOOK);
    const renderer: Writable<Renderer> = getContext(ContextKey.RENDER_STORE);

    let control:OrbitControls;

    Update(() => {
        if(control != null) {
            control.update();
        } else if($renderer.domElement) {
            control = new OrbitControls($camera, $renderer.domElement);
        }
    })
</script>