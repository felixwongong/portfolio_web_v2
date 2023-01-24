import {Component} from "./Component";
import {Group } from "three";

class MeshComp extends Component {
    mesh?: Group = new Group();

    constructor(mesh?: Group) {
        super();
        this.mesh = mesh;
    }
}

export default MeshComp;