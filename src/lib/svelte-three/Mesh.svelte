<script lang="ts">
    import {createEventDispatcher, getContext} from "svelte";
    import {BoxGeometry, Mesh, MeshBasicMaterial, Scene} from "three";
    import {ContextKey} from "./ContextKey";
    const scene: Scene = getContext(ContextKey.SCENE);

    const dispatch = createEventDispatcher();

    export let mesh:Mesh;

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);

    const material = new MeshBasicMaterial({color: 0x44aa88});

    mesh = new Mesh(geometry, material);
    scene.add(mesh);
</script>