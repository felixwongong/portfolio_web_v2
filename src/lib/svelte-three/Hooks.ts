type Hook = () => Promise<void>;
type AddHook = (hook: Hook) => void;

type EventFunc = {
   Update: AddHook,
   Start: AddHook,
}

export type {EventFunc, Hook, AddHook};