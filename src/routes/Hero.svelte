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
    import StaticMesh from "$lib/svelte-three/StaticMesh.svelte";
    import Setting from "$lib/svelte-three/Setting/Setting.svelte";
</script>

<section class="h-screen w-full">
    <Setting />

    <Canvas class="w-full h-screen">
        <Scene>
            <GameObject>
                <Transform/>
                <StaticMesh src={chair}></StaticMesh>
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