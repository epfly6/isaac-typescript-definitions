import { TearFlag } from "../enums/flags/TearFlag";

declare global {
  interface EntityBomb extends Entity {
    AddTearFlags(flags: TearFlag | BitFlag<TearFlag>): void;
    ClearTearFlags(flags: TearFlag | BitFlag<TearFlag>): void;
    HasTearFlags(flags: TearFlag | BitFlag<TearFlag>): boolean;
    SetExplosionCountdown(countdown: int): void;

    ExplosionDamage: float;
    Flags: BitFlag<TearFlag>;
    IsFetus: boolean;
    RadiusMultiplier: float;
  }
}
