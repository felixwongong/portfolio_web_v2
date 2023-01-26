import {Component} from "./Component";
import type {Mesh} from "three";

class MeshComp extends Component {
    mesh?: Mesh

    constructor(mesh?: Mesh) {
        super();
        this.mesh = mesh;
    }
}

export default MeshComp;