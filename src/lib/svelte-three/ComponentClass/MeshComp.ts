import {Component} from "./Component";
import type {ComponentFunc} from "./Component";
import type {Mesh} from "three";
import {getContext} from "svelte";
import {ContextKey} from "../ContextKey";
import TransformComp from "./TransformComp";

class MeshComp extends Component {
    mesh?: Mesh
    transform: TransformComp

    constructor(mesh?: Mesh) {
        super();
        const {AddComponent, GetComponent}: ComponentFunc = getContext(ContextKey.COMP_FUNC);
        AddComponent(this);
        this.mesh = mesh;
        this.transform = GetComponent(TransformComp.name);
    }
}

export default MeshComp;