type Hook = () => Promise<void>;
type AddHook = (hook: Hook) => void;

type EventFunc = {
   Update: AddHook,
}

export type {EventFunc, Hook, AddHook};