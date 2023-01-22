<script lang="ts">
    import * as THREE from "three";
    import Perspective from "./Perspective.svelte";
    import {PerspectiveCamera, WebGLRenderer} from "three";
    import Scene from "./Scene.svelte";
    import {onDestroy, onMount} from "svelte";

    let resizeObserver: ResizeObserver;

    let container: HTMLElement;
    let threeCanvas: HTMLCanvasElement;
    let renderer: WebGLRenderer;

    let camera: PerspectiveCamera;
    let mainScene: THREE.Scene;

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
        <Scene bind:scene={mainScene}></Scene>
        <Perspective bind:camera={camera}/>
    </canvas>
</div>
