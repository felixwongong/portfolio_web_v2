<script lang="ts">
    import {Canvas, GameObject, Perspective, Scene, StaticMesh, Transform} from "$lib/svelte-three";
    import {OrbitControl, TransformControl} from "$lib/svelte-three/Control";

    import {AmbientLight, DirectionalLight} from "$lib/svelte-three/Light/";
    import {Object3D, Vector3} from "three";
    import chair from "$lib/assets/model/chair.glb"
    import desk from "$lib/assets/model/desk.glb"
    import Setting from "$lib/svelte-three/Setting/Setting.svelte";
    import {onMount} from "svelte";

    let LoadCanvas;

    onMount(() => {
        console.log("Hero loaded")
        setTimeout(() => LoadCanvas(), 3000);
    })
</script>

<section class="h-screen w-full">
    <Setting/>
        <Canvas class="w-full h-screen" bind:InitAction={LoadCanvas}>
            <Scene>
                <GameObject>
                    <Transform/>
                    <StaticMesh src={chair}></StaticMesh>
                </GameObject>
                <GameObject>
                    <Transform position={new Vector3(0, 0, 0.3)}/>
                    <StaticMesh src={desk}></StaticMesh>
                </GameObject>
                <GameObject>
                    <Transform position={Object3D.DefaultUp}/>
                    <DirectionalLight/>
                </GameObject>
                <GameObject>
                    <Perspective/>
                </GameObject>
                <AmbientLight/>
            </Scene>
            <OrbitControl/>
            <TransformControl/>
        </Canvas>
</section>