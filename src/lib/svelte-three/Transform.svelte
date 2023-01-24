<script lang="ts">
    import {getContext, onMount} from "svelte";
    import {ContextKey} from "./ContextKey";
    import {TransformComp} from "./ComponentClass/Locator";
    import type {ComponentFunc} from "./ComponentClass/Component";
    import {Euler, Vector3} from "three";

    const  {AddComponent, GetComponent}: ComponentFunc = getContext(ContextKey.COMP_FUNC);

    export let position: Vector3 = new Vector3();
    export let rotation: Euler = new Euler();
    export let scale: Vector3 = new Vector3(1,1,1);

    AddComponent(new TransformComp(position, rotation, scale));
    
    let m_transform: TransformComp;

    onMount(() => {
       m_transform = GetComponent(TransformComp.name);
    })
</script>

<slot>
</slot>