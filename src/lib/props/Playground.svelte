<script>
    import {Canvas, Scene, GameObject, Transform, StaticMesh, Perspective} from "../svelte-three"

    import chair from "$lib/assets/model/chair.glb"
    import {AmbientLight, DirectionalLight} from "../svelte-three/Light";

    let isFullScreen = false;
</script>

<section
        class="{isFullScreen ? 'max-w-screen': 'max-w-screen-md' } h-screen bg-base-300 mx-auto py-10 flex justify-start prose">
    <div class="flex flex-row">
        <div class="flex flex-col justify-start flex-wrap">
            <h2 class="block" contenteditable>Game dev & Web dev newbie</h2>
            <p class="block" contenteditable>...and a non-stop learner</p>
            <button class="btn">My Work</button>
        </div>
        <div class="card card-bordered card-side bg-base-100 shadow-xl h-fit w-fit">
            <Canvas>
                <Scene>
                    <GameObject>
                        <Transform/>
                        <StaticMesh src={chair}></StaticMesh>
                    </GameObject>
                    <Perspective />
                    <AmbientLight />
                </Scene>
            </Canvas>
            <div class="card-body">
                <h2 class="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    </div>
</section>