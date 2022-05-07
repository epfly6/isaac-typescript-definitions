import { DoorSlot } from "../DoorSlot";

/** For GridEntityType.DOOR (16) */
const DoorSlotFlagInternal = {
  /** 1 << 0 */
  LEFT0: 1 << DoorSlot.LEFT0,

  /** 1 << 1 */
  UP0: 1 << DoorSlot.UP0,

  /** 1 << 2 */
  RIGHT0: 1 << DoorSlot.RIGHT0,

  /** 1 << 3 */
  DOWN0: 1 << DoorSlot.DOWN0,

  /** 1 << 4 */
  LEFT1: 1 << DoorSlot.LEFT1,

  /** 1 << 5 */
  UP1: 1 << DoorSlot.UP1,

  /** 1 << 6 */
  RIGHT1: 1 << DoorSlot.RIGHT1,

  /** 1 << 7 */
  DOWN1: 1 << DoorSlot.DOWN1,
};

type DoorSlotFlagValue = number & {
  readonly __bitFlagBrand: void;
  readonly __doorSlotFlagBrand: void;
};
type DoorSlotFlagType = {
  [K in keyof typeof DoorSlotFlagInternal]: DoorSlotFlagValue;
};

export const DoorSlotFlag = DoorSlotFlagInternal as DoorSlotFlagType;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type DoorSlotFlag = DoorSlotFlagType[keyof DoorSlotFlagType];
