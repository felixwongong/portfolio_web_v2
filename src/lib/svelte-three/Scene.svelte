<script lang="ts">
    import {Object3D, Scene} from "three";
    import Mesh from "./Mesh.svelte";
    import {onMount} from "svelte";

    let rootMesh;

    export let scene: Scene;

    scene = new Scene();

    onMount(() => {
        if(rootMesh != null) {
            scene.add(rootMesh);
        }
    })
</script>

<Mesh bind:mesh={rootMesh}>
</Mesh>