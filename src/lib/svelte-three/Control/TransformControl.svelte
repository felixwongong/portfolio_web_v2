<script lang="ts">
    import {TransformControls} from "../three/TransformControls.js";
    import {getContext, onDestroy } from "svelte";
    import {ContextKey} from "../ContextKey";
    import {Camera, Group, Mesh, Object3D, Scene, Vector2} from "three";
    import { EMode, Mode } from "../Setting/Setting.ts";
    import RaycastUtil from "../Utilities/Raycast.ts";


    import type{Renderer} from "three";
    import type {Writable} from "svelte/store";
    import type {EventFunc} from "../Hooks";
    import KeyMapMode from "./KeyMapMode";

    const cam = getContext<Writable<Camera>>(ContextKey.CAM_STORE);
    const renderer = getContext<Writable<Renderer>>(ContextKey.RENDER_STORE);
    const scene = getContext<Writable<Scene>>(ContextKey.SCENE_STORE);
    const { Start }:EventFunc = getContext<EventFunc>(ContextKey.HOOK);

    let control: TransformControls;
    let rc = new RaycastUtil();
    let lastHitObject: Object3D;

    function SelectObject(event: MouseEvent) {
        event.preventDefault();

        if($Mode == EMode.VIEW ) return;
        if(control.dragging) return;
        control.detach();
        const clickPos = new Vector2(event.offsetX, event.offsetY);
        const hits = rc.Raycast($cam, $renderer, clickPos, $scene)
        if(hits.length > 0) {
            const obj = hits[0];
            control.attach(obj)
            lastHitObject = obj;
        }
    }

    function OnDbClick(event: MouseEvent) {
        event.preventDefault();
        $renderer.domElement.addEventListener("mousedown", SelectObject)

        const clickPos = new Vector2(event.offsetX, event.offsetY);
        const hits = rc.Raycast($cam, $renderer, clickPos, $scene)
        if(hits.length > 0) {
            Mode.set(EMode.OBJECT);
            SelectObject(event);
        }
    }

    function OnChangeMode(event: KeyboardEvent) {
        if(event.code == "Escape") {
            Mode.set(EMode.VIEW);
            return;
        }
        let mode = KeyMapMode[event.code];
        if(mode) {
            control.setMode(mode);
        }
    }

    function SelectRandomObject() {
        if(lastHitObject == null) lastHitObject = $scene.children.find((obj) => obj as Group);
        if(!control.object) {
            control.attach(lastHitObject);
        }
    }

    Start(() => {
        if(!$cam || !$renderer) return;
        control = new TransformControls($cam, $renderer.domElement);

        $scene.add(control);

        Mode.subscribe((value) => {
            const isObject = value === EMode.OBJECT;
            if(!isObject) {
                $renderer.domElement.removeEventListener("mousedown", SelectObject)
                window.removeEventListener('keydown', OnChangeMode)
            } else {
                $renderer.domElement.addEventListener("mousedown", SelectObject)
                window.addEventListener('keydown', OnChangeMode)
                SelectRandomObject();
            }
            control.enabled = isObject;
            control.showX = control.showY = control.showZ = isObject;
        })

        $renderer.domElement.addEventListener("dblclick", OnDbClick)
    })

    onDestroy(() => {
        control?.dispose();
    })
</script>