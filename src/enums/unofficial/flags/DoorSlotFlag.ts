/** For GridEntityType.GRID_DOOR (16) */
const DoorSlotFlagInternal = {
  LEFT0: 1 << DoorSlot.LEFT0,
  UP0: 1 << DoorSlot.UP0,
  RIGHT0: 1 << DoorSlot.RIGHT0,
  DOWN0: 1 << DoorSlot.DOWN0,
  LEFT1: 1 << DoorSlot.LEFT1,
  UP1: 1 << DoorSlot.UP1,
  RIGHT1: 1 << DoorSlot.RIGHT1,
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
