<script>
    import {Canvas, Scene, GameObject, Transform, StaticMesh, Perspective} from "../svelte-three"

    import coffee from "$lib/assets/model/coffee.glb"
    import {AmbientLight, DirectionalLight} from "../svelte-three/Light";
    import {Object3D, Vector3} from "three";

    let isFullScreen = false;
</script>

<section
        class="{isFullScreen ? 'max-w-screen': 'max-w-screen-md' } h-screen mx-auto py-10 flex justify-between prose">
    <div class="flex flex-col justify-start flex-wrap">
        <h2 class="block" contenteditable>Game dev & Web dev newbie</h2>
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
                    </GameObject>
                    <GameObject>
                        <Transform position={Object3D.DefaultUp}/>
                        <DirectionalLight />
                    </GameObject>
                    <GameObject>
                        <Transform position={new Vector3(0, 0.5, 2.5)}/>
                        <Perspective />
                    </GameObject>
                    <AmbientLight />
                </Scene>
            </Canvas>
        </div>
        <div class="card-body">
            <h2 class="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Watch</button>
            </div>
        </div>
    </div>
</section>