<script lang="ts">
    import {onMount, setContext} from "svelte";
    import type {Component, ComponentFunc} from "./ComponentClass/Component";
    import {ContextKey} from "./ContextKey.ts";
    import Transform from "./Transform.svelte";

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

    onMount(() => {
        console.log('======================')
        components.forEach(c => console.log(c))
    })
</script>

<slot></slot>

<Transform>
    <slot name="children"/>
</Transform>

<slot name="components"/>
