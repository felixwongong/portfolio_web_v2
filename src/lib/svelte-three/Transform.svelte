<script lang="ts">
    import {getContext, onMount, setContext} from "svelte";
    import {ContextKey} from "./ContextKey";
    import {TransformComp} from "./ComponentClass/Locator";
    const  AddComponent = getContext(ContextKey.ADD_COMP);
    const  GetComponent = getContext(ContextKey.GET_COMP);
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