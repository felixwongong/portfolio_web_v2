<script lang="ts">
    import {getContext, onMount} from "svelte";
    import {ContextKey} from "../svelte-three/ContextKey";
    import TransformComp from "../svelte-three/ComponentClass/TransformComp";

    const GetComponent = getContext(ContextKey.GET_COMP);
    const Update = getContext(ContextKey.UPDATE);

    let transform: TransformComp;

    onMount(() => {
        transform = GetComponent(TransformComp.name);
    })

    Update(() => {
        transform.rotation.x += 0.01;
    })
</script>