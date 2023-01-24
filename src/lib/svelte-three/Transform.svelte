<script lang="ts">
    import {getContext, onMount, setContext} from "svelte";
    import {ContextKey} from "./ContextKey";
    import {TransformComp} from "./ComponentClass/Locator";
    import type {ComponentFunc} from "./ComponentClass/Component";
    const  {AddComponent, GetComponent}: ComponentFunc = getContext(ContextKey.COMP_FUNC);
    const  Update = getContext(ContextKey.UPDATE);

    AddComponent(new TransformComp());

    let m_transform: TransformComp;

    onMount(() => {
       m_transform = GetComponent(TransformComp.name);
    })

    Update(() => {
        //console.log(m_transform.rotation.x)
    })
</script>

<slot>
</slot>