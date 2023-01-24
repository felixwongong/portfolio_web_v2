<script lang="ts">
    import {getContext} from "svelte";
    import {ContextKey} from "./ContextKey";
    import TransformComp from "./ComponentClass/Transform";
    const  AddComponent = getContext(ContextKey.ADD_COMP);

    let m_transform: TransformComp = new TransformComp()

    AddComponent(m_transform);
</script>

<slot>
</slot>