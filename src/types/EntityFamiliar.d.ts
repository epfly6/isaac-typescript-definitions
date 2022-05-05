import { TargetFlag } from "../enums/unofficial/flags/TargetFlag";

declare global {
  interface EntityFamiliar extends Entity {
    AddCoins(value: int): void;
    AddHearts(hearts: int): void;
    AddKeys(keys: int): void;
    AddToDelayed(): void;
    AddToFollowers(): void;
    AddToOrbit(layer: int): void;
    FireProjectile(direction: Vector): EntityTear;
    FollowParent(): void;
    FollowPosition(position: Vector): void;
    GetOrbitPosition(position: Vector): Vector;
    MoveDelayed(numFrames: int): void;
    MoveDiagonally(speed: float): void;

    /**
     * @param maxDistance
     * @param frameInterval Default is 13.
     * @param flags Default is 0. See the `TargetFlag` enum for more information.
     * @param coneDir Default is `Vector.Zero`.
     * If ~= Vector.Zero, searches for targets in a cone pointing in this direction.
     * @param coneAngle Default is 15.
     * If ConeDir ~= Vector.Zero, sets the half angle of the search cone in degrees
     * (45 results in a search angle of 90 degrees).
     */
    PickEnemyTarget(
      maxDistance: float,
      frameInterval?: int,
      flags?: TargetFlag | BitFlags<TargetFlag>,
      coneDir?: Vector,
      coneAngle?: float,
    ): void;

    PlayChargeAnim(direction: Direction): void;
    PlayFloatAnim(direction: Direction): void;
    PlayShootAnim(direction: Direction): void;
    RecalculateOrbitOffset(layer: int, add: boolean): int;
    RemoveFromDelayed(): void;
    RemoveFromFollowers(): void;
    RemoveFromOrbit(): void;
    Shoot(): void;

    Coins: int;
    FireCooldown: int;
    HeadFrameDelay: int;
    Hearts: int;
    Keys: int;
    LastDirection: Direction;
    MoveDirection: Direction;
    OrbitAngleOffset: float;
    OrbitDistance: Vector;

    /**
     * All familiars are associated with an `EntityPlayer`. If the `Player` attribute is set to
     * undefined, the game will crash.
     */
    Player: EntityPlayer;

    RoomClearCount: int;
    ShootDirection: Direction;
    State: int;
  }

  namespace EntityFamiliar {
    function GetOrbitDistance(this: void, layer: int): Vector;
  }
}
