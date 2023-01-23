<script lang="ts">
    import {PerspectiveCamera, WebGLRenderer, Scene} from "three";
    import {onDestroy, onMount, setContext} from "svelte";
    import {ContextKey} from "./ContextKey";
    import Mesh from "./Mesh.svelte";

    let resizeObserver: ResizeObserver;

    let container: HTMLElement;
    let threeCanvas: HTMLCanvasElement;
    let renderer: WebGLRenderer;

    let camera: PerspectiveCamera;
    let mainScene: Scene;

    setContext(ContextKey.SET_CAM, (c: PerspectiveCamera) => camera = c);
    setContext(ContextKey.SET_SCENE, (s: Scene) => mainScene = s);

    function Update(time: number) {
        renderer.render(mainScene, camera);

        requestAnimationFrame(Update);
    }

    function CanvasResize() {
        renderer = new WebGLRenderer({
            canvas: threeCanvas,
            precision: "highp",
            alpha: true,
            antialias: true,
        });

        const {width, height} = container.getBoundingClientRect();
        const needResize = renderer.domElement.width !== width || renderer.domElement.height !== height;

        if (needResize) {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
        }
    }

    function SetCamera(newCam: PerspectiveCamera) {
        camera = newCam;
    }

    onMount(() => {
        resizeObserver = new ResizeObserver(_ => {
            CanvasResize();
        })
        resizeObserver.observe(container);
        CanvasResize();
        requestAnimationFrame(Update);
    })

    onDestroy(() => {
        resizeObserver?.unobserve(container);
    })
</script>

<!--
  @component
  Canvas will follow absolutely container size

  Usage:
    ```tsx
  <SavingsCard title="Your Deposit">
    <div>
      I deposited 34€
    </div>
  </SavingsCard>
  ```
 -->
<div id="container" class="{$$props.class}" bind:this={container}>
    <canvas bind:this={threeCanvas} class="w-full h-full">
        <slot/>
    </canvas>
</div>
