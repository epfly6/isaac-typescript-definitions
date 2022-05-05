// Enums from the "resources/scripts/enums.lua" file
// (flags only)

declare enum CacheFlag {
  /** 1 << 0 */
  CACHE_DAMAGE = 1 << 0,

  /** 1 << 1 */
  CACHE_FIREDELAY = 1 << 1,

  /** 1 << 2 */
  CACHE_SHOTSPEED = 1 << 2,

  /** 1 << 3 */
  CACHE_RANGE = 1 << 3,

  /** 1 << 4 */
  CACHE_SPEED = 1 << 4,

  /** 1 << 5 */
  CACHE_TEARFLAG = 1 << 5,

  /** 1 << 6 */
  CACHE_TEARCOLOR = 1 << 6,

  /** 1 << 7 */
  CACHE_FLYING = 1 << 7,

  /** 1 << 8 */
  CACHE_WEAPON = 1 << 8,

  /** 1 << 9 */
  CACHE_FAMILIARS = 1 << 9,

  /** 1 << 10 */
  CACHE_LUCK = 1 << 10,

  /** 1 << 11 */
  CACHE_SIZE = 1 << 11,

  /** 1 << 12 */
  CACHE_COLOR = 1 << 12,

  /** 1 << 13 */
  CACHE_PICKUP_VISION = 1 << 13,

  /** (1 << 16) - 1 */
  CACHE_ALL = (1 << 16) - 1,

  /** 1 << 31 */
  CACHE_TWIN_SYNC = 2147483648,
  // (this cannot be represented as "1 << 31" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)
}

declare enum LevelStateFlag {
  STATE_BUM_KILLED = 0,
  STATE_EVIL_BUM_KILLED = 1,
  STATE_REDHEART_DAMAGED = 2,
  STATE_BUM_LEFT = 3,
  STATE_EVIL_BUM_LEFT = 4,
  STATE_DAMAGED = 5,
  STATE_SHOPKEEPER_KILLED_LVL = 6,
  STATE_COMPASS_EFFECT = 7,
  STATE_MAP_EFFECT = 8,
  STATE_BLUE_MAP_EFFECT = 9,
  STATE_FULL_MAP_EFFECT = 10,
  STATE_GREED_LOST_PENALTY = 11,
  STATE_GREED_MONSTRO_SPAWNED = 12,
  STATE_ITEM_DUNGEON_FOUND = 13,
  STATE_MAMA_MEGA_USED = 14,
  STATE_WOODEN_CROSS_REMOVED = 15,
  STATE_SHOVEL_QUEST_TRIGGERED = 16,
  STATE_SATANIC_BIBLE_USED = 17,
  STATE_SOL_EFFECT = 18,
  STATE_LEVEL_START_TRIGGERED = 19,
  STATE_LUNA_EFFECT = 20,
  STATE_VOID_DOOR_DISABLED = 21,
  STATE_MINESHAFT_ESCAPE = 22,
  STATE_MIRROR_BROKEN = 23,

  NUM_STATE_FLAGS = 24,
}
