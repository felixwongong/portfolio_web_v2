<script lang="ts">
    import {getContext, onDestroy} from "svelte";
    import {LoadingManager, Scene} from "three";
    import {ContextKey} from "./ContextKey";
    import TransformComp from "./ComponentClass/TransformComp";

    import {GLTFLoader} from "./three/GLTFLoader.js";
    import type {Writable} from "svelte/store";
    import {MeshComp} from "./ComponentClass";
    import type {EventFunc} from "./Hooks";
    const loader = new GLTFLoader(getContext<LoadingManager>(ContextKey.LOADING));

    const {AddComponent, GetComponent} = getContext(ContextKey.COMP_FUNC);
    const scene = getContext<Writable<Scene>>(ContextKey.SCENE_STORE);
    const {Start ,Update} = getContext<EventFunc>(ContextKey.HOOK);


    export let src:string;

    let transform: TransformComp = GetComponent(TransformComp.name);

    let m_mesh: MeshComp = new MeshComp();

    Update(() => {
        const mesh = m_mesh?.mesh;
        if(!mesh) return;
        if(transform.rotation != mesh.rotation) {
            mesh.rotation.set(...transform.rotation);
        }
    })

    AddComponent(m_mesh)

    Start(async () => {
        loader.load(src, function (fbx) {
            const mesh = fbx.scene.children[0];
            m_mesh.mesh = mesh;
            $scene.add(mesh);

            if(transform.position != mesh.position) {
                mesh.position.set(...transform.position);
            }
        }, undefined, function (err) {
            console.log(err)
        })
    })

    onDestroy(() => {
        if(!m_mesh.mesh) return;
        console.log("object dispose")
        m_mesh.mesh.geometry.dispose();
        m_mesh.mesh.material.dispose();
    })
</script>