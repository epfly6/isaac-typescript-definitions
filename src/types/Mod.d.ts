/**
 * The Lua object corresponding to this interface is defined as a local variable in the
 * "scripts/main.lua" file.
 */
declare interface Mod {
  AddCallback<T extends keyof AddCallbackParameter>(
    modCallbacks: T,
    ...args: AddCallbackParameter[T]
  ): void;

  HasData(): boolean;
  LoadData(): string;
  RemoveCallback<T extends keyof AddCallbackParameter>(
    modCallbacks: ModCallbacks,
    ...args: AddCallbackParameter[T]
  ): void;
  RemoveData(): void;
  SaveData(data: string): void;

  Name: string;
}
