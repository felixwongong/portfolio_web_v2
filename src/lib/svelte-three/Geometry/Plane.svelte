<script lang="ts">
    import {DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry} from "three";

    const geometry = new PlaneGeometry(1, 1);
    const material = new MeshBasicMaterial({color: 0xffff00, side: DoubleSide});
    const plane = new Mesh(geometry, material);


</script>