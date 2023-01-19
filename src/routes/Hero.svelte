<script>
    import * as THREE from "three";
    import {Canvas, Mesh, PerspectiveCamera, onFrame} from 'svelte-cubed';

    let spin = 0;

    onFrame(() => {
        spin = spin + 0.01;
        console.log(spin);
    })
</script>

<div class="h-full w-full">
    <Canvas alpha={true}>
        <Mesh geometry={new THREE.BoxGeometry()} rotation={[0, spin, 0]}/>
        <PerspectiveCamera position={[1, 10, 10]}/>
    </Canvas>
</div>