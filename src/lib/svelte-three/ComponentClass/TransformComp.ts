import {Component} from "./Component";
import {Euler, Group, Object3D, Scene, Vector3} from "three";

class TransformComp extends Component {
    group: Group;

    get position(): Vector3 {return this.group.position;}
    get rotation(): Euler {
        return this.group.rotation;
    }
    get scale(): Vector3 {return this.group.scale;}

    constructor(
        position: Vector3 = new Vector3(),
        rotation: Euler = new Euler(),
        scale: Vector3 = new Vector3(),
        name: string = "Default Group",
    ) {
        super();
        this.group = new Group();
        this.group.position.set(position.x, position.y, position.z);
        this.group.rotation.set(rotation.x, rotation.y, rotation.z, rotation.order);
        this.group.scale.set(scale.x, scale.y, scale.z);
        this.group.name = name;
    }

    bind(obj: Object3D) {
        this.group.add(obj);
    }

    addToScene(scene: Scene) {
        scene.add(this.group)
    }
}

export default TransformComp;