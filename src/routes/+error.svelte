<script lang="ts">

import {Canvas, Scene, GameObject, Transform , Perspective, ThreeText} from "$lib/svelte-three";
import {DirectionalLight, AmbientLight} from "$lib/svelte-three/Light";
import {Object3D, Vector3} from "three";

</script>

<section class="h-screen w-full">
    <Canvas class="w-full h-screen">
        <Scene>
            <GameObject>
                <Transform/>
                <ThreeText/>
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
    </Canvas>
</section>
