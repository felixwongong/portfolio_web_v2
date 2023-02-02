<script lang="ts">
    import {FontLoader} from "./three/FontLoader.js";
    import {LoadingManager, Mesh, MeshBasicMaterial, Scene} from "three";
    import {getContext, onDestroy} from "svelte";
    import {ContextKey} from "./ContextKey";
    import {TextGeometry} from "./three/TextGeometry.js";
    import comicFont from "$lib/assets/font/comic";
    import type {EventFunc} from "./Hooks";
    import type {Writable} from "svelte/store";

    const loadingManager = getContext<LoadingManager>(ContextKey.LOADING);
    const {Start} = getContext<EventFunc>(ContextKey.HOOK);
    const scene = getContext<Writable<Scene>>(ContextKey.SCENE_STORE);

    let mesh: Mesh;

    const loader: FontLoader = new FontLoader(loadingManager);

    Start(async () => {
        const font = await loader.parse(comicFont);

        const geometry = new TextGeometry( 'Hello three.js!', { font: font, } );
        const material = new MeshBasicMaterial({color: 0x00ff00});
        mesh = new Mesh(geometry, material);

        $scene.add(mesh);
    })

    onDestroy(() => {
        mesh?.material.dispose();
        mesh?.geometry.dispose();
    })
</script>
