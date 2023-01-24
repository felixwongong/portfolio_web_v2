<script lang="ts">
    import {onMount, setContext} from "svelte";
    import type {Component, ComponentFunc} from "./ComponentClass/Component";
    import {ContextKey} from "./ContextKey.ts";

    export let components: Component[] = [];


    let func: ComponentFunc = {
        AddComponent: (comp: Component) => components.push(comp),
        GetComponent: GetComponent
    }

    setContext(ContextKey.COMP_FUNC, func);


    function GetComponent<T extends Component>(typeName: string): T {
        for (let component of components) {
            if (typeName == component.constructor.name) return component as T;
        }
    }

</script>

<slot />