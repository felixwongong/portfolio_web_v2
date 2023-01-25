type AsyncHook = () => Promise<void>;
type Hook = () => void;
type AddHook = (hook: AsyncHook | Hook) => void;

type EventFunc = {
   Update: AddHook,
   Start: AddHook,
}

export type {EventFunc, AsyncHook, AddHook};