<script lang="ts">
    import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
    import {getContext, onMount} from "svelte";
    import {ContextKey} from "./ContextKey";
    import type {Writable} from "svelte/store";
    import {PerspectiveCamera} from "three";
    import type {Renderer} from "three";

    const camera: Writable<PerspectiveCamera> = getContext(ContextKey.CAM);
    const Update = getContext(ContextKey.UPDATE);
    const renderer: Writable<Renderer> = getContext(ContextKey.RENDER);

    let control:OrbitControls;

    Update(() => {
        if(control != null) {
            control.update();
        } else if($renderer.domElement) {
            control = new OrbitControls($camera, $renderer.domElement);
        }
    })
</script>