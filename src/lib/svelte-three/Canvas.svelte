<script lang="ts">
    import {PerspectiveCamera, Scene, WebGLRenderer} from "three";
    import {onDestroy, onMount, setContext} from "svelte";
    import {ContextKey} from "./ContextKey";
    import {writable} from "svelte/store";
    import type {EventFunc, Hook} from "./Hooks";


    let resizeObserver: ResizeObserver;

    let container: HTMLElement;
    let threeCanvas: HTMLCanvasElement;
    let renderer: writable<WebGLRenderer> = writable();

    let camera = writable<PerspectiveCamera>();
    let mainScene = writable<Scene>();
    let updateActions: Hook[] = [];
    let startAction: Hook[] = [];

    const eventFunc: EventFunc = {
        Update: (action:Hook) => updateActions.push(action),
        Start:(action:Hook) => startAction.push(action),
    }

    setContext(ContextKey.CAM_STORE, camera);
    setContext(ContextKey.RENDER_STORE, renderer);
    setContext(ContextKey.SCENE_STORE, mainScene);
    setContext(ContextKey.HOOK, eventFunc)



    let frameCount: number = 0;
    let curTime: number = 0;


    async function Start() {
        for(let i = 0; i < startAction.length; i++) {
            await startAction[i]();
        }
    }

    async function Update(time: number) {
        $renderer.render($mainScene, $camera);

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

    onMount(async () => {
        CanvasResize();

        await Start();

        resizeObserver = new ResizeObserver(_ => {
            CanvasResize();
        })
        resizeObserver.observe(container);

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
