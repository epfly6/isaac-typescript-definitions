import { ProjectileFlag } from "../enums/flags/ProjectileFlag";

declare global {
  function ProjectileParams(this: void): ProjectileParams;

  interface ProjectileParams {
    Acceleration: float;
    BulletFlags: BitFlags<ProjectileFlag>;
    ChangeFlags: BitFlags<ProjectileFlag>;
    ChangeTimeout: int;
    ChangeVelocity: float;
    CircleAngle: float;
    Color: Color;
    CurvingStrength: float;
    DepthOffset: float;
    DotProductLimit: float;
    FallingAccelModifier: float;
    FallingSpeedModifier: float;
    FireDirectionLimit: Vector;
    GridCollision: boolean;
    HeightModifier: float;
    HomingStrength: float;
    PositionOffset: Vector;
    Scale: float;
    Spread: float;
    TargetPosition: Vector;
    Variant: ProjectileVariant | int;
    VelocityMulti: float;
    WiggleFrameOffset: int;
  }
}
