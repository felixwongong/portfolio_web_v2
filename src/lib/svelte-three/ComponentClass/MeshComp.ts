import {Component} from "./ComponentType";
import type {BoxGeometry, MeshBasicMaterial} from "three";
import {Mesh} from "three";

class MeshComp extends Component {
    material: MeshBasicMaterial;
    geometry: BoxGeometry;
    mesh: Mesh;

    constructor(material: MeshBasicMaterial, geometry: BoxGeometry) {
        super();
        this.material = material;
        this.geometry = geometry;
        this.mesh = new Mesh(this.geometry, this.material);
    }
}

export default MeshComp;