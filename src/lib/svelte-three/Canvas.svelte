<script lang="ts">
    import {PerspectiveCamera, Scene, WebGLRenderer} from "three";
    import {onDestroy, onMount, setContext} from "svelte";
    import {ContextKey} from "./ContextKey";

    type OnUpdate = () => Promise<void>;

    let resizeObserver: ResizeObserver;

    let container: HTMLElement;
    let threeCanvas: HTMLCanvasElement;
    let renderer: WebGLRenderer;

    let camera: PerspectiveCamera;
    let mainScene: Scene;
    let updateActions: OnUpdate[] = [];

    setContext(ContextKey.SET_CAM, (c: PerspectiveCamera) => camera = c);
    setContext(ContextKey.SET_SCENE, (s: Scene) => mainScene = s);
    setContext(ContextKey.UPDATE, (action: OnUpdate) => updateActions.push(action))


    async function Update(time: number) {
        renderer.render(mainScene, camera);

        for(let i = 0; i < updateActions.length; i++) {
            console.log("doing update?")
            await updateActions[i]();
        }

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
<div bind:this={container} class="{$$props.class}" id="container">
    <canvas bind:this={threeCanvas} class="w-full h-full">
        <slot/>
    </canvas>
</div>
