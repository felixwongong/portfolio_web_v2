class Component {
}

type ComponentFunc = {
    AddComponent: (comp: Component) => void;
    GetComponent: <T extends Component>(typeName: string) => T;
}

export {Component }

export type {ComponentFunc}
