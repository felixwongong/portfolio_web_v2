<script lang="ts">
    import Canvas from "$lib/svelte-three/Canvas.svelte";
    import Perspective from "$lib/svelte-three/Perspective.svelte";
    import Scene from "$lib/svelte-three/Scene.svelte";
    import Mesh from "$lib/svelte-three/Mesh.svelte";
    import GameObject from "$lib/svelte-three/GameObject.svelte";
    import Rotator from "$lib/svelte-three-custom/Rotator.svelte";

    import chair from "$lib/assets/model/chair.glb";

</script>

<section class="h-screen w-full">
    <Canvas class="w-screen h-screen">
        <Scene>
            <GameObject>
                <svelte:fragment slot="components">
                    <Mesh src={chair}></Mesh>
                </svelte:fragment>
                <Rotator />
            </GameObject>
        </Scene>
        <Perspective />
    </Canvas>
</section>