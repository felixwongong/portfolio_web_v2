<script lang="ts">
    import {TransformControls} from "../three/TransformControls.js";
    import {getContext, onMount} from "svelte";
    import {ContextKey} from "../ContextKey";
    import {BoxGeometry, Camera, Mesh, MeshNormalMaterial, Scene} from "three";
    import type{Renderer} from "three";
    import type {Writable} from "svelte/store";

    const cam = getContext<Writable<Camera>>(ContextKey.CAM_STORE);
    const renderer = getContext<Writable<Renderer>>(ContextKey.RENDER_STORE);
    const scene = getContext<Writable<Scene>>(ContextKey.SCENE_STORE);

    onMount(() => {
        console.log($cam + ", " + $renderer + "," + $scene)
        if(!$cam || !$renderer) return;
        const control = new TransformControls($cam, $renderer.domElement);

        const cube = new Mesh(new BoxGeometry(), new MeshNormalMaterial())
        $scene.add(cube)
        console.log("Add cube")

        control.attach(cube);
        $scene.add(control);
    })


</script>