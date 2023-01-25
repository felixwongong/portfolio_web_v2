<script lang="ts">
    import {TransformControls} from "../three/TransformControls.js";
    import {getContext, onMount} from "svelte";
    import {ContextKey} from "../ContextKey";
    import {BoxGeometry, Camera, Mesh, MeshNormalMaterial, Raycaster, Scene, Vector2} from "three";
    import { EMode, Mode } from "../Setting/Setting.ts";

    import type{Renderer} from "three";
    import type {Writable} from "svelte/store";
    import type {EventFunc} from "../Hooks";

    const cam = getContext<Writable<Camera>>(ContextKey.CAM_STORE);
    const renderer = getContext<Writable<Renderer>>(ContextKey.RENDER_STORE);
    const scene = getContext<Writable<Scene>>(ContextKey.SCENE_STORE);
    const { Start }:EventFunc = getContext<EventFunc>(ContextKey.HOOK);

    let control: TransformControls;
    let raycaster = new Raycaster();

    function Raycast(rend: Renderer, clickPos: Vector2, sc: Scene) {
        const pointer = new Vector2();
        const canvasEl = rend.domElement;
        pointer.x = (clickPos.x / canvasEl.offsetWidth) * 2 - 1;
        pointer.y = -(clickPos.y / canvasEl.offsetHeight) * 2 + 1;

        raycaster.setFromCamera(pointer, $cam);
        const intersects = raycaster.intersectObjects(sc.children, false);
        intersects.forEach((ro) => {
            console.log(ro.object);
        })

        if (intersects.length > 0) {
            const cube = new Mesh(new BoxGeometry(), new MeshNormalMaterial())
            cube.scale.set(0.1, 0.1, 0.1);
            const point = intersects[0].point;
            cube.position.set(point.x, point.y, point.z);
            sc.add(cube);
        }
    }

    function SelectObject(event: MouseEvent) {
        event.preventDefault();
        const rend = $renderer;
        const sc = $scene;
        const clickPos = new Vector2(event.offsetX, event.offsetY);
        Raycast(rend, clickPos, sc);
    }

    Start(() => {
        if(!$cam || !$renderer) return;
        control = new TransformControls($cam, $renderer.domElement);

        const cube = new Mesh(new BoxGeometry(), new MeshNormalMaterial())
        $scene.add(cube)

        control.attach(cube);
        $scene.add(control);

        Mode.subscribe((value) => {
            const isObject = value === EMode.OBJECT;
            control.enabled = isObject;
            control.showX = control.showY = control.showZ = isObject;
        })

        $renderer.domElement.addEventListener("mousedown", SelectObject)
    })


</script>