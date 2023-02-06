<script lang="ts">
    import {Canvas, GameObject, Perspective, Scene, StaticMesh, Transform} from "$lib/svelte-three";
    import {OrbitControl, TransformControl} from "$lib/svelte-three/Control";

    import {AmbientLight, DirectionalLight} from "$lib/svelte-three/Light/";
    import {Object3D, Vector3} from "three";
    import chair from "$lib/assets/model/chair.glb"
    import desk from "$lib/assets/model/desk.glb"
    import Setting from "$lib/svelte-three/Setting/Setting.svelte";

    console.log(chair)
</script>

<section class="h-screen w-full">
    <Setting/>
        <Canvas class="w-full h-screen">
            <Scene>
                <GameObject>
                    <Transform/>
                    <StaticMesh src={chair}></StaticMesh>
                </GameObject>
                <GameObject name="desk">
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