import { TearFlag } from "../enums/flags/TearFlag";

declare global {
  interface EntityKnife extends Entity {
    AddTearFlags(flags: TearFlag | BitFlag<TearFlag>): void;
    ClearTearFlags(flags: TearFlag | BitFlag<TearFlag>): void;
    GetKnifeDistance(): float;
    GetKnifeVelocity(): float;
    GetRenderZ(): int;
    HasTearFlags(flags: TearFlag | BitFlag<TearFlag>): boolean;
    IsFlying(): boolean;
    Reset(): void;
    SetPathFollowSpeed(speed: float): void;
    Shoot(charge: float, range: float): void;

    Charge: float;
    MaxDistance: float;
    PathFollowSpeed: float;
    PathOffset: float;
    Rotation: float;
    RotationOffset: float;
    Scale: float;
    TearFlags: BitFlag<TearFlag>;
  }
}
