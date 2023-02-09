<script lang="ts">
    import {getContext, onMount} from "svelte";
    import {ContextKey} from "./ContextKey";
    import {TransformComp} from "./ComponentClass";
    import type {ComponentFunc} from "./ComponentClass/Component";
    import {Euler, Vector3} from "three";

    const  {Start} = getContext(ContextKey.HOOK);
    const  {AddComponent, GetComponent}: ComponentFunc = getContext(ContextKey.COMP_FUNC);
    const scene = getContext(ContextKey.SCENE_STORE);

    export let position: Vector3 = new Vector3();
    export let rotation: Euler = new Euler();
    export let scale: Vector3 = new Vector3(1,1,1);

    const name = getContext(ContextKey.NAME);
    AddComponent(new TransformComp(position, rotation, scale, name));
    
    let m_transform: TransformComp;
    m_transform = GetComponent(TransformComp.name);

    Start(() => {
        m_transform.addToScene($scene);
    })
</script>

<slot>
</slot>