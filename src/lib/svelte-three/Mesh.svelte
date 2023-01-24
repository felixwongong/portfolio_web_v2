<script lang="ts">
    import {getContext, onMount} from "svelte";
    import {Group, Scene} from "three";
    import {ContextKey} from "./ContextKey";
    import TransformComp from "./ComponentClass/TransformComp";

    import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
    const loader = new GLTFLoader();

    const {AddComponent, GetComponent} = getContext(ContextKey.COMP_FUNC);
    const scene: Scene = getContext(ContextKey.SCENE);
    const Update = getContext(ContextKey.UPDATE);

    export let src:string;

    let transform: TransformComp = GetComponent(TransformComp.name);

    let m_model: Group;

    Update(() => {
        if(!m_model || transform.rotation === m_model.rotation) return;
        m_model.rotation.x = transform.rotation.x;
        m_model.rotation.y = transform.rotation.y;
        m_model.rotation.z = transform.rotation.z;
    })

    AddComponent(m_model)


    onMount(() => {
        loader.load(src, function (fbx) {
            m_model = fbx.scene;
            scene.add(m_model);
        }, undefined, function (err) {
            console.log(err)
        })
    })
</script>