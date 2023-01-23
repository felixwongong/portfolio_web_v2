<script lang="ts">
import Transform from "./Transform.svelte";
import {setContext} from "svelte";
import type {MonoBehaviour} from "./MonoType";
import {ContextKey} from "./ContextKey.ts";

let components: MonoBehaviour[] = [];

setContext(ContextKey.ADD_COMP, (comp: MonoBehaviour) => components.push(comp))

</script>

<slot></slot>

<Transform>
    <slot/>
</Transform>
