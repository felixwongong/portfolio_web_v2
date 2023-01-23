<script lang="ts">
    import {createEventDispatcher, getContext} from "svelte";
    import {BoxGeometry, Euler, Mesh, MeshBasicMaterial, Scene} from "three";
    import {ContextKey} from "./ContextKey";

    const scene: Scene = getContext(ContextKey.SCENE);
    const Update = getContext(ContextKey.UPDATE);

    export let mesh:Mesh;
    export let rotation: Euler = new Euler();

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);

    const material = new MeshBasicMaterial({color: 0x44aa88});

    mesh = new Mesh(geometry, material);

    Update(() => {
        if(rotation === mesh.rotation) return;
        mesh.rotation.x = rotation.x;
        mesh.rotation.y = rotation.y;
        mesh.rotation.z = rotation.z;
    })

    scene.add(mesh);
</script>