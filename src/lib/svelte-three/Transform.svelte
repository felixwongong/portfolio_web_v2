<script lang="ts">
    import {Euler, Vector3} from "three";
    import type {Component} from "./ComponentType";
    import {getContext} from "svelte";
    import {ContextKey} from "./ContextKey";
    const  AddComponent = getContext(ContextKey.ADD_COMP);

    interface Transform extends Component{
        position: Vector3;
        rotation: Euler;
        scale: Vector3;
    }

    let m_transform: Transform = {
        position: new Vector3(),
        rotation: new Euler(),
        scale: new Vector3(1, 1, 1),
    };

    AddComponent(m_transform);
</script>

<slot>
</slot>