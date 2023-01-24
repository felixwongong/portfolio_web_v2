import {Component} from "./ComponentType";
import {Euler, Vector3} from "three";

class TransformComp extends Component {
    position: Vector3 = new Vector3();
    rotation: Euler = new Euler();
    scale: Vector3 = new Vector3(1,1,1);
}

export default TransformComp;