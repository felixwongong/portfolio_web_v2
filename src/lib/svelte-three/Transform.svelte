<script lang="ts">
    import {Euler, Vector3} from "three";
    import type {MonoBehaviour} from "./MonoType";
    import {getContext} from "svelte";
    import {ContextKey} from "./ContextKey";
    const { AddComponent } = getContext(ContextKey.ADD_COMP);

    interface Transform extends MonoBehaviour{
        position: Vector3;
        rotation: Euler;
        scale: Vector3;
    }

    export let m_transform: Transform = {
        position: new Vector3(),
        rotation: new Euler(),
        scale: new Vector3(1, 1, 1),
    };

    AddComponent(() => m_transform);
</script>

<slot>
</slot>