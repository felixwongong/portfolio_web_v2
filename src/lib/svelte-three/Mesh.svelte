<script lang="ts">
    import {getContext} from "svelte";
    import {BoxGeometry, Euler, Material, Mesh, MeshBasicMaterial, Scene} from "three";
    import {ContextKey} from "./ContextKey";
    import {MeshComp} from "./ComponentClass/Locator";

    const AddComponent = getContext(ContextKey.ADD_COMP);
    const scene: Scene = getContext(ContextKey.SCENE);
    const Update = getContext(ContextKey.UPDATE);

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;

    let rotation: Euler = new Euler();

    let m_mesh: MeshComp = new MeshComp(
        new MeshBasicMaterial({color: 0x44aa88}),
        new BoxGeometry(boxWidth, boxHeight, boxDepth)
    )
    m_mesh.mesh = new Mesh(m_mesh.geometry, m_mesh.material);

    Update(() => {
        if(rotation === m_mesh.mesh.rotation) return;
        m_mesh.mesh.rotation.x = rotation.x;
        m_mesh.mesh.rotation.y = rotation.y;
        m_mesh.mesh.rotation.z = rotation.z;
    })

    AddComponent(m_mesh)
    scene.add(m_mesh.mesh);
</script>