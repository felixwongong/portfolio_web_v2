<script lang="ts">
    import {PerspectiveCamera, Scene, WebGLRenderer, Cache, LoadingManager} from "three";
    import {onDestroy, onMount, setContext} from "svelte";
    import {ContextKey} from "./ContextKey";
    import {get , writable} from "svelte/store";
    import type {Writable} from "svelte/store";
    import type {EventFunc, AsyncHook} from "./Hooks";

    export let id = Math.floor(Math.random() * 999);
    export let precision = "mediump";
    export let antialias = true;

    let resizeObserver: ResizeObserver;

    let container: HTMLElement;
    let threeCanvas: HTMLCanvasElement;
    let renderer: Writable<WebGLRenderer> = writable();

    let camera = writable<PerspectiveCamera>();
    let mainScene = writable<Scene>();
    let updateActions: AsyncHook[] = [];
    let startAction: AsyncHook[] = [];

    let prepared = false;
    let loadingManager = new LoadingManager(() => {
        console.log("scene is ready")
        prepared = true
    });

    setContext<LoadingManager>(ContextKey.LOADING, loadingManager);

    const eventFunc: EventFunc = {
        Update: (action:AsyncHook) => updateActions.push(action),
        Start:(action:AsyncHook) => startAction.push(action),
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
        if(!prepared) {requestAnimationFrame(Update); return;}
        $renderer.setRenderTarget(null);
        $renderer.clear();
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
        console.log("resizing 3d canvas")
        $renderer = new WebGLRenderer({
            canvas: threeCanvas,
            precision: precision,
            alpha: true,
            antialias: antialias,
        });


        if(!container) return;
        const {width, height} = container.getBoundingClientRect();
        const needResize = $renderer.domElement.width !== width || $renderer.domElement.height !== height;

        if (needResize) {
            $camera.aspect = width / height;
            $camera.updateProjectionMatrix();

            $renderer.setSize(width, height);
        }
    }

    onMount(() => {
        setTimeout(() => {
            Init();
        }, 500)
    })

    async function Init() {
        CanvasResize();

        await Start();

        requestAnimationFrame(Update);
    }

    onDestroy(() => {
        $renderer?.setRenderTarget(null);
        $renderer?.clear();
        $renderer?.dispose();
        Cache.clear();
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

<svelte:window  on:resize={CanvasResize}/>
<div bind:this={container} class="{$$props.class}" id={id}>
    <canvas bind:this={threeCanvas} class="w-full h-full">
        <slot/>
    </canvas>
</div>
