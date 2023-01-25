<script lang="ts">
    import {getContext, onMount} from "svelte";
    import {Group, Scene} from "three";
    import {ContextKey} from "./ContextKey";
    import TransformComp from "./ComponentClass/TransformComp";

    import {GLTFLoader} from "./three/GLTFLoader";
    import type {Writable} from "svelte/store";
    import {MeshComp} from "./ComponentClass/Locator";
    import type {EventFunc} from "./Hooks";
    const loader = new GLTFLoader();

    const {AddComponent, GetComponent} = getContext(ContextKey.COMP_FUNC);
    const scene = getContext<Writable<Scene>>(ContextKey.SCENE_STORE);
    const {Update} = getContext<EventFunc>(ContextKey.HOOK);


    export let src:string;

    let transform: TransformComp = GetComponent(TransformComp.name);

    let m_mesh: MeshComp = new MeshComp();

    Update(() => {
        const mesh = m_mesh?.mesh;
        if(!mesh || transform.rotation === mesh.rotation) return;
        mesh.rotation.x = transform.rotation.x;
        mesh.rotation.y = transform.rotation.y;
        mesh.rotation.z = transform.rotation.z;
    })

    AddComponent(m_mesh)


    onMount(() => {
        loader.load(src, function (fbx) {
            m_mesh.mesh = fbx.scene;
            $scene.add(m_mesh.mesh);
        }, undefined, function (err) {
            console.log(err)
        })
    })
</script>