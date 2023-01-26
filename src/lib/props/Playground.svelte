<script>
    import {Canvas, Scene, GameObject, Transform, StaticMesh, Perspective} from "../svelte-three"

    import coffee from "$lib/assets/model/coffee.glb"
    import {AmbientLight, DirectionalLight} from "../svelte-three/Light";
    import {Euler, Object3D, Vector3} from "three";
    import Rotator from "../svelte-three-custom/Rotator.svelte";


    let isFullScreen = false;
</script>

<section
        class="{isFullScreen ? 'max-w-screen': 'max-w-screen-md' } h-screen mx-auto py-10 flex justify-between">
    <div class="flex flex-col justify-start flex-wrap prose">
        <h2 class="block" contenteditable>A Game Developer, and Web Developer</h2>
        <p class="block" contenteditable>...and a non-stop learner</p>
        <button class="btn">My Work</button>
    </div>
    <div class="card glass card-bordered card-side card-compact shadow-xl h-fit w-fit">
        <div class="w-1/3 my-auto">
            <Canvas>
                <Scene>
                    <GameObject>
                        <Transform/>
                        <StaticMesh src={coffee}></StaticMesh>
                        <Rotator/>
                    </GameObject>
                    <GameObject>
                        <Transform position={Object3D.DefaultUp}/>
                        <DirectionalLight />
                    </GameObject>
                    <GameObject>
                        <Perspective position={new Vector3(0, 2, 3)} rotation={new Euler(-0.3, 0, 0)} />
                    </GameObject>
                    <AmbientLight />
                </Scene>
            </Canvas>
        </div>
        <div class="card-body">
            <h2 class="card-title">WONG YUEN LAM</h2>
            <h4> (Felix)</h4>
            <p>Holiday coder</p>
            <h6>Coffee addict</h6>
        </div>
    </div>
</section>