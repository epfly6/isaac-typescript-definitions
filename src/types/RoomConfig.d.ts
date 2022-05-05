// This is "RoomConfigRoom" in the docs:
// https://wofsauge.github.io/IsaacDocs/rep/RoomConfig_Room.html

import { RoomShape } from "../enums/RoomShape";
import { DoorSlotFlag } from "../enums/unofficial/flags/DoorSlotFlag";
import { RoomDifficulty } from "../enums/unofficial/RoomDifficulty";

declare global {
  interface RoomConfig {
    Difficulty: RoomDifficulty;
    Doors: BitFlags<DoorSlotFlag>;
    Height: int;
    InitialWeight: float;
    Name: string;
    Shape: RoomShape;
    SpawnCount: int;
    Spawns: SpawnList;
    StageID: StageID;
    Subtype: int;
    Type: RoomType;
    Variant: int;
    Weight: float;
    Width: int;
  }
}
