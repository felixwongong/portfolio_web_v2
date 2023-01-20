<script>
    import {onMount} from "svelte";

    import * as THREE from "three";
    import {Canvas, Mesh, PerspectiveCamera, OrbitControls, onFrame} from 'svelte-cubed';

    let pixelRatio = 0.75;
    let spin = 0;

    onFrame(() => {
        spin = spin + 0.01;
    })

    onMount(() => {
        let container = document.querySelector(".container");
        // container.style.position = "relative";
        // container.style.width = `${container.clientHeight / pixelRatio}px`;
        container.querySelector("canvas").style.margin = "auto"
    })
</script>

<section class="h-screen w-full">
    <Canvas antialias alpha={true}> <!--pixelRatio={pixelRatio} -->
        <Mesh geometry={new THREE.BoxGeometry()} rotation={[0, spin, 0]}/>
        <PerspectiveCamera position={[1, 10, 10]}/>
        <OrbitControls enableZoom={false} />
    </Canvas>
</section>