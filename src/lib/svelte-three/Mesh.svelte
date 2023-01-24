<script lang="ts">
    import {getContext} from "svelte";
    import {BoxGeometry, Euler, Material, Mesh, MeshBasicMaterial, Scene} from "three";
    import {ContextKey} from "./ContextKey";
    import {MeshComp} from "./ComponentClass/Locator";
    import TransformComp from "./ComponentClass/TransformComp";

    const {AddComponent, GetComponent} = getContext(ContextKey.COMP_FUNC);
    const scene: Scene = getContext(ContextKey.SCENE);
    const Update = getContext(ContextKey.UPDATE);

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;

    let transform: TransformComp = GetComponent(TransformComp.name);

    let m_mesh: MeshComp = new MeshComp(
        new MeshBasicMaterial({color: 0x44aa88}),
        new BoxGeometry(boxWidth, boxHeight, boxDepth)
    )
    m_mesh.mesh = new Mesh(m_mesh.geometry, m_mesh.material);

    Update(() => {
        if(transform.rotation === m_mesh.mesh.rotation) return;
        m_mesh.mesh.rotation.x = transform.rotation.x;
        m_mesh.mesh.rotation.y = transform.rotation.y;
        m_mesh.mesh.rotation.z = transform.rotation.z;
    })

    AddComponent(m_mesh)
    scene.add(m_mesh.mesh);
</script>