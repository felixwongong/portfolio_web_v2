<script lang="ts">
    import {getContext} from "svelte";
    import {ContextKey} from "../ContextKey";
    import { DirectionalLight, Scene} from "three";
    import type { ColorRepresentation } from "three";
    import type {Writable} from "svelte/store";
    import TransformComp from "../ComponentClass/TransformComp";
    import type {ComponentFunc} from "../ComponentClass/Component";

    const scene = getContext<Writable<Scene>>(ContextKey.SCENE);
    const {GetComponent} = getContext<ComponentFunc>(ContextKey.COMP_FUNC);
    const Update = getContext(ContextKey.UPDATE);

    let transform: TransformComp = GetComponent(TransformComp.name);

    export let color: ColorRepresentation = 0x404040;
    export let intensity: number = 6;

    const light = new DirectionalLight(color, intensity); // soft white light
    $scene.add(light)

    Update(() => {
        if(transform.position != light.position) {
            light.position.x = transform.position.x;
            light.position.y = transform.position.y;
            light.position.z = transform.position.z;
        }
    })
</script>