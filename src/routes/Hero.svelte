<script lang="ts">
    import Canvas from "$lib/svelte-three/Canvas.svelte";
    import Perspective from "$lib/svelte-three/Perspective.svelte";
    import Scene from "$lib/svelte-three/Scene.svelte";
    import GameObject from "$lib/svelte-three/GameObject.svelte";

    import OrbitControl from "$lib/svelte-three/Control/OrbitControl.svelte";
    import Transform from "$lib/svelte-three/Transform.svelte";
    import AmbientLight from "$lib/svelte-three/Light/AmbientLight.svelte";
    import DirectionalLight from "../lib/svelte-three/Light/DirectionalLight.svelte";
    import {Object3D} from "three";
    import TransformControl from "../lib/svelte-three/Control/TransformControl.svelte";
    import chair from "$lib/assets/model/chair.glb"
    import Mesh from "$lib/svelte-three/Mesh.svelte";
</script>

<section class="h-screen w-full">
    <span class="absolute" style="top: 10%; left: 10%">
        <select class="indicator-top indicator-center select select-bordered select-sm w-full max-w-xs">
            <option>View</option>
            <option>Object</option>
        </select>
    </span>



    <Canvas class="w-full h-screen">
        <Scene>
            <GameObject>
                <Transform/>
                <Mesh src={chair}></Mesh>
            </GameObject>
            <GameObject>
                <Transform position={Object3D.DefaultUp}/>
                <DirectionalLight />
            </GameObject>
            <Perspective />
            <AmbientLight />
        </Scene>
        <OrbitControl />
        <TransformControl />
    </Canvas>


</section>