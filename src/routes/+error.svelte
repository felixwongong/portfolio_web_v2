<script lang="ts">

import {Canvas, Scene, GameObject, Transform , Perspective, StaticMesh} from "$lib/svelte-three";
import {DirectionalLight, AmbientLight} from "$lib/svelte-three/Light";
import {Object3D, Vector3} from "three";
import chair from "$lib/assets/model/chair.glb"

</script>

<section class="h-screen w-full">
    <Canvas class="w-full h-screen">
        <Scene>
            <GameObject>
                <Transform/>
                <StaticMesh src={chair}></StaticMesh>
            </GameObject>
            <GameObject name="desk">
                <Transform position={new Vector3(0, 0, 0.3)}/>
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
