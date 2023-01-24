<script lang="ts">
    import {getContext, onMount} from "svelte";
    import {ContextKey} from "./ContextKey";
    import {TransformComp} from "./ComponentClass/Locator";
    import type {ComponentFunc} from "./ComponentClass/Component";
    const  {AddComponent, GetComponent}: ComponentFunc = getContext(ContextKey.COMP_FUNC);

    AddComponent(new TransformComp());

    let m_transform: TransformComp;

    onMount(() => {
       m_transform = GetComponent(TransformComp.name);
    })
</script>

<slot>
</slot>