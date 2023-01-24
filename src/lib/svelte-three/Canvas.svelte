<script lang="ts">
    import {AmbientLight, PerspectiveCamera, Scene, WebGLRenderer} from "three";
    import {onDestroy, onMount, setContext} from "svelte";
    import {ContextKey} from "./ContextKey";
    import {writable} from "svelte/store";

    type OnUpdate = () => Promise<void>;

    let resizeObserver: ResizeObserver;

    let container: HTMLElement;
    let threeCanvas: HTMLCanvasElement;
    let renderer: writable<WebGLRenderer> = writable();

    let camera = writable<PerspectiveCamera>();
    let mainScene: Scene;
    let updateActions: OnUpdate[] = [];

    setContext(ContextKey.CAM, camera);
    setContext(ContextKey.RENDER, renderer);
    setContext(ContextKey.SET_SCENE, (s: Scene) => mainScene = s);
    setContext(ContextKey.UPDATE, (action: OnUpdate) => updateActions.push(action))

    let frameCount: number = 0;
    let curTime: number = 0;

    async function Update(time: number) {
        $renderer.render(mainScene, $camera);

        for(let i = 0; i < updateActions.length; i++) {
            await updateActions[i]();
        }

        if(time - curTime > 1000) {
            curTime = time;
            frameCount = 0;
        } else {
            frameCount++;
        }

        requestAnimationFrame(Update);
    }

    function CanvasResize() {
        $renderer = new WebGLRenderer({
            canvas: threeCanvas,
            precision: "highp",
            alpha: true,
            antialias: true,
        });

        const {width, height} = container.getBoundingClientRect();
        const needResize = $renderer.domElement.width !== width || $renderer.domElement.height !== height;

        if (needResize) {
            $camera.aspect = width / height;
            $camera.updateProjectionMatrix();

            $renderer.setSize(width, height);
        }
    }

    onMount(() => {
        resizeObserver = new ResizeObserver(_ => {
            CanvasResize();
        })
        resizeObserver.observe(container);
        CanvasResize();

        const light = new AmbientLight( 0x404040, 6 ); // soft white light
        mainScene.add(light)
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
