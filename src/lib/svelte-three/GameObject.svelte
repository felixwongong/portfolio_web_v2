<script lang="ts">
    import {getContext, onMount, setContext} from "svelte";
import type {Component} from "./ComponentClass/ComponentType";
import {ContextKey} from "./ContextKey.ts";
import Transform from "./Transform.svelte";
import MeshComp from "./ComponentClass/MeshComp";

export let components: Component[] = [];

setContext(ContextKey.ADD_COMP, (comp: Component) => components.push(comp))
setContext(ContextKey.GET_COMP, GetComponent)

function GetComponent<T extends Component>(typeName: string): T{
    for (const component of components) {
        if(typeName == component.constructor.name) return component as T;
    }
}
</script>

<slot></slot>

<Transform>
    <slot name="children"/>
</Transform>

<slot name="components"/>
