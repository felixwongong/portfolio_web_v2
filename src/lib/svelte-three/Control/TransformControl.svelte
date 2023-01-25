<script lang="ts">
    import {TransformControls} from "../three/TransformControls.js";
    import {getContext, onMount} from "svelte";
    import {ContextKey} from "../ContextKey";
    import {BoxGeometry, Camera, Mesh, MeshNormalMaterial, Raycaster, Scene, Vector2} from "three";
    import { EMode, Mode } from "../Setting/Setting.ts";
    import RaycastUtil from "../Utilities/Raycast.ts";


    import type{Renderer} from "three";
    import type {Writable} from "svelte/store";
    import type {EventFunc} from "../Hooks";

    const cam = getContext<Writable<Camera>>(ContextKey.CAM_STORE);
    const renderer = getContext<Writable<Renderer>>(ContextKey.RENDER_STORE);
    const scene = getContext<Writable<Scene>>(ContextKey.SCENE_STORE);
    const { Start }:EventFunc = getContext<EventFunc>(ContextKey.HOOK);

    let control: TransformControls;
    let rc = new RaycastUtil();

    function SelectObject(event: MouseEvent) {
        event.preventDefault();

        if($Mode == EMode.VIEW ) return;
        if(control.dragging) return;
        control.detach();
        const clickPos = new Vector2(event.offsetX, event.offsetY);
        const hits = rc.Raycast($cam, $renderer, clickPos, $scene)
        if(hits.length > 0) {
            control.attach(hits[0].object)
        }
    }

    function onDbClick(event: MouseEvent) {
        event.preventDefault();

        const clickPos = new Vector2(event.offsetX, event.offsetY);
        const hits = rc.Raycast($cam, $renderer, clickPos, $scene)
        if(hits.length > 0) {
            Mode.set(EMode.OBJECT);
            SelectObject(event);
        }
    }

    Start(() => {
        if(!$cam || !$renderer) return;
        control = new TransformControls($cam, $renderer.domElement);

        const cube = new Mesh(new BoxGeometry(), new MeshNormalMaterial())
        cube.position.set(1, 0, 0);
        $scene.add(cube)

        control.attach(cube);
        $scene.add(control);

        Mode.subscribe((value) => {
            const isObject = value === EMode.OBJECT;
            control.enabled = isObject;
            control.showX = control.showY = control.showZ = isObject;
        })

        $renderer.domElement.addEventListener("mousedown", SelectObject)
        $renderer.domElement.addEventListener("dblclick", onDbClick)
    })


</script>