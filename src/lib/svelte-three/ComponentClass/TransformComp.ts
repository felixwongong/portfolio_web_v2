import {Component} from "./Component";
import {Euler, Vector3} from "three";

class TransformComp extends Component {
    position?: Vector3 = new Vector3();
    rotation?: Euler = new Euler();
    scale?: Vector3 = new Vector3(1,1,1);

    constructor(position?: Vector3, rotation?: Euler, scale?: Vector3) {
        super();
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
    }
}

export default TransformComp;