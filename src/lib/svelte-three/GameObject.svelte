<script lang="ts">
import Transform from "./Transform.svelte";
import {onMount, setContext} from "svelte";
import type {Component} from "./ComponentType";
import {ContextKey} from "./ContextKey.ts";

let components: Component[] = [];

setContext(ContextKey.ADD_COMP, (comp: Component) => components.push(comp))

onMount(() => {
    components.forEach((c) => console.info(c))
})
</script>

<slot></slot>

<Transform>
    <slot name="children"/>
</Transform>

<slot name="components"/>
