import {BoxGeometry, Camera, Mesh, MeshNormalMaterial, Raycaster, Scene, Vector2} from "three";
import type {Renderer} from "three";

export default class RaycastUtil {
    raycaster: Raycaster;

    constructor() {
        this.raycaster = new Raycaster();
    }


     Raycast(cam: Camera , rend: Renderer, clickPos: Vector2, sc: Scene, recursive = false, debug = false) {
        const pointer = new Vector2();
        const canvasEl = rend.domElement;
        pointer.x = (clickPos.x / canvasEl.offsetWidth) * 2 - 1;
        pointer.y = -(clickPos.y / canvasEl.offsetHeight) * 2 + 1;

        this.raycaster.setFromCamera(pointer, cam);
        const intersects = this.raycaster.intersectObjects(sc.children, recursive);

        if (debug && intersects.length > 0) {
            const cube = new Mesh(new BoxGeometry(), new MeshNormalMaterial())
            cube.scale.set(0.1, 0.1, 0.1);
            const point = intersects[0].point;
            cube.position.set(point.x, point.y, point.z);
            sc.add(cube);
        }
        return intersects;
    }
}



