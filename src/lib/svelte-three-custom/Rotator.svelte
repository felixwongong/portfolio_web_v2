<script lang="ts">
    import {getContext, onMount} from "svelte";
    import {ContextKey} from "../svelte-three/ContextKey";
    import TransformComp from "../svelte-three/ComponentClass/TransformComp";
    import type {ComponentFunc} from "../svelte-three/ComponentClass/Component";

    const {GetComponent}:ComponentFunc = getContext(ContextKey.COMP_FUNC);
    const Update = getContext(ContextKey.UPDATE);

    let transform: TransformComp;

    onMount(() => {
        transform = GetComponent(TransformComp.name);
    })

    Update(() => {
        transform.rotation.y += 0.01;
    })
</script>