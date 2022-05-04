// Enums from the "resources/scripts/enums.lua" file
// (flags only)

declare enum EntityFlag {
  /** 1 << 0 */
  FLAG_NO_STATUS_EFFECTS = 1 << 0,

  /** 1 << 1 */
  FLAG_NO_INTERPOLATE = 1 << 1,

  /** 1 << 2 */
  FLAG_APPEAR = 1 << 2,

  /** 1 << 3 */
  FLAG_RENDER_FLOOR = 1 << 3,

  /** 1 << 4 */
  FLAG_NO_TARGET = 1 << 4,

  /** 1 << 5 */
  FLAG_FREEZE = 1 << 5,

  /** 1 << 6 */
  FLAG_POISON = 1 << 6,

  /** 1 << 7 */
  FLAG_SLOW = 1 << 7,

  /** 1 << 8 */
  FLAG_CHARM = 1 << 8,

  /** 1 << 9 */
  FLAG_CONFUSION = 1 << 9,

  /** 1 << 10 */
  FLAG_MIDAS_FREEZE = 1 << 10,

  /** 1 << 11 */
  FLAG_FEAR = 1 << 11,

  /** 1 << 12 */
  FLAG_BURN = 1 << 12,

  /** 1 << 13 */
  FLAG_RENDER_WALL = 1 << 13,

  /** 1 << 14 */
  FLAG_INTERPOLATION_UPDATE = 1 << 14,

  /** 1 << 15 */
  FLAG_APPLY_GRAVITY = 1 << 15,

  /** 1 << 16 */
  FLAG_NO_BLOOD_SPLASH = 1 << 16,

  /** 1 << 17 */
  FLAG_NO_REMOVE_ON_TEX_RENDER = 1 << 17,

  /** 1 << 18 */
  FLAG_NO_DEATH_TRIGGER = 1 << 18,

  /**
   * This shares the same value as `FLAG_LASER_POP` and `FLAG_ITEM_SHOULD_DUPLICATE`, but has a
   * different meaning depending on the entity type.
   *
   * 1 << 19
   */
  FLAG_NO_SPIKE_DAMAGE = 1 << 19,

  /**
   * This shares the same value as `FLAG_NO_SPIKE_DAMAGE` and `FLAG_ITEM_SHOULD_DUPLICATE`, but has
   * a different meaning depending on the entity type.
   *
   * 1 << 19
   */
  FLAG_LASER_POP = 1 << 19,

  /**
   * This shares the same value as `FLAG_NO_SPIKE_DAMAGE` and `FLAG_LASER_POP`, but has a
   * different meaning depending on the entity type.
   *
   * 1 << 19
   */
  FLAG_ITEM_SHOULD_DUPLICATE = 1 << 19,

  /** 1 << 20 */
  FLAG_BOSSDEATH_TRIGGERED = 1 << 20,

  /** 1 << 21 */
  FLAG_DONT_OVERWRITE = 1 << 21,

  /** 1 << 22 */
  FLAG_SPAWN_STICKY_SPIDERS = 1 << 22,

  /** 1 << 23 */
  FLAG_SPAWN_BLACK_HP = 1 << 23,

  /** 1 << 24 */
  FLAG_SHRINK = 1 << 24,

  /** 1 << 25 */
  FLAG_NO_FLASH_ON_DAMAGE = 1 << 25,

  /** 1 << 26 */
  FLAG_NO_KNOCKBACK = 1 << 26,

  /** 1 << 27 */
  FLAG_SLIPPERY_PHYSICS = 1 << 27,

  /** 1 << 28 */
  FLAG_ADD_JAR_FLY = 1 << 28,

  /** 1 << 29 */
  FLAG_FRIENDLY = 1 << 29,

  /** 1 << 30 */
  FLAG_NO_PHYSICS_KNOCKBACK = 1 << 30,

  /** 1 << 31 */
  FLAG_DONT_COUNT_BOSS_HP = 2147483648,
  // (this cannot be represented as "1 << 31" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 32 */
  FLAG_NO_SPRITE_UPDATE = 4294967296,
  // (this cannot be represented as "1 << 32" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 33 */
  FLAG_CONTAGIOUS = 8589934592,
  // (this cannot be represented as "1 << 33" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 34 */
  FLAG_BLEED_OUT = 17179869184,
  // (this cannot be represented as "1 << 34" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 35 */
  FLAG_HIDE_HP_BAR = 34359738368,
  // (this cannot be represented as "1 << 35" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 36 */
  FLAG_NO_DAMAGE_BLINK = 68719476736,
  // (this cannot be represented as "1 << 36" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 37 */
  FLAG_PERSISTENT = 137438953472,
  // (this cannot be represented as "1 << 37" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 38 */
  FLAG_BACKDROP_DETAIL = 274877906944,
  // (this cannot be represented as "1 << 38" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 39 */
  FLAG_AMBUSH = 549755813888,
  // (this cannot be represented as "1 << 39" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 40 */
  FLAG_GLITCH = 1099511627776,
  // (this cannot be represented as "1 << 40" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 41 */
  FLAG_SPIN = 2199023255552,
  // (this cannot be represented as "1 << 41" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 42 */
  FLAG_NO_REWARD = 4398046511104,
  // (this cannot be represented as "1 << 42" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 43 */
  FLAG_REDUCE_GIBS = 8796093022208,
  // (this cannot be represented as "1 << 43" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 44 */
  FLAG_TRANSITION_UPDATE = 17592186044416,
  // (this cannot be represented as "1 << 44" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 45 */
  FLAG_NO_PLAYER_CONTROL = 35184372088832,
  // (this cannot be represented as "1 << 45" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 46 */
  FLAG_NO_QUERY = 70368744177664,
  // (this cannot be represented as "1 << 46" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 47 */
  FLAG_KNOCKED_BACK = 140737488355328,
  // (this cannot be represented as "1 << 47" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 48 */
  FLAG_APPLY_IMPACT_DAMAGE = 281474976710656,
  // (this cannot be represented as "1 << 48" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 49 */
  FLAG_ICE_FROZEN = 562949953421312,
  // (this cannot be represented as "1 << 49" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 50 */
  FLAG_ICE = 1125899906842624,
  // (this cannot be represented as "1 << 50" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 51 */
  FLAG_MAGNETIZED = 2251799813685248,
  // (this cannot be represented as "1 << 51" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 52 */
  FLAG_BAITED = 4503599627370496,
  // (this cannot be represented as "1 << 52" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 53 */
  FLAG_KILLSWITCH = 9007199254740992,
  // (this cannot be represented as "1 << 53" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 54 */
  FLAG_WEAKNESS = 18014398509481984,
  // (this cannot be represented as "1 << 54" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 55 */
  FLAG_EXTRA_GORE = 36028797018963968,
  // (this cannot be represented as "1 << 55" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 56 */
  FLAG_BRIMSTONE_MARKED = 72057594037927936,
  // (this cannot be represented as "1 << 56" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 57 */
  FLAG_HELD = 144115188075855872,
  // (this cannot be represented as "1 << 57" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 58 */
  FLAG_THROWN = 288230376151711744,
  // (this cannot be represented as "1 << 58" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 59 */
  FLAG_FRIENDLY_BALL = 576460752303423488,
  // (this cannot be represented as "1 << 59" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)
}

/** For EntityType.ENTITY_PROJECTILE (9) */
declare enum ProjectileFlags {
  /** 1 << 0 */
  SMART = 1 << 0,

  /** 1 << 1 */
  EXPLODE = 1 << 1,

  /** 1 << 2 */
  ACID_GREEN = 1 << 2,

  /** 1 << 3 */
  GOO = 1 << 3,

  /** 1 << 4 */
  GHOST = 1 << 4,

  /** 1 << 5 */
  WIGGLE = 1 << 5,

  /** 1 << 6 */
  BOOMERANG = 1 << 6,

  /** 1 << 7 */
  HIT_ENEMIES = 1 << 7,

  /** 1 << 8 */
  ACID_RED = 1 << 8,

  /** 1 << 9 */
  GREED = 1 << 9,

  /** 1 << 10 */
  RED_CREEP = 1 << 10,

  /** 1 << 11 */
  ORBIT_CW = 1 << 11,

  /** 1 << 12 */
  ORBIT_CCW = 1 << 12,

  /** 1 << 13 */
  NO_WALL_COLLIDE = 1 << 13,

  /** 1 << 14 */
  CREEP_BROWN = 1 << 14,

  /** 1 << 15 */
  FIRE = 1 << 15,

  /** 1 << 16 */
  BURST = 1 << 16,

  /** 1 << 17 */
  ANY_HEIGHT_ENTITY_HIT = 1 << 17,

  /** 1 << 18 */
  CURVE_LEFT = 1 << 18,

  /** 1 << 19 */
  CURVE_RIGHT = 1 << 19,

  /** 1 << 20 */
  TURN_HORIZONTAL = 1 << 20,

  /** 1 << 21 */
  SINE_VELOCITY = 1 << 21,

  /** 1 << 22 */
  MEGA_WIGGLE = 1 << 22,

  /** 1 << 23 */
  SAWTOOTH_WIGGLE = 1 << 23,

  /** 1 << 24 */
  SLOWED = 1 << 24,

  /** 1 << 25 */
  TRIANGLE = 1 << 25,

  /** 1 << 26 */
  MOVE_TO_PARENT = 1 << 26,

  /** 1 << 27 */
  ACCELERATE = 1 << 27,

  /** 1 << 28 */
  DECELERATE = 1 << 28,

  /** 1 << 29 */
  BURST3 = 1 << 29,

  /** 1 << 30 */
  CONTINUUM = 1 << 30,

  /** 1 << 31 */
  CANT_HIT_PLAYER = 2147483648,
  // (this cannot be represented as "1 << 31" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 32 */
  CHANGE_FLAGS_AFTER_TIMEOUT = 4294967296,
  // (this cannot be represented as "1 << 32" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 33 */
  CHANGE_VELOCITY_AFTER_TIMEOUT = 8589934592,
  // (this cannot be represented as "1 << 33" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 34 */
  STASIS = 17179869184,
  // (this cannot be represented as "1 << 34" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 35 */
  FIRE_WAVE = 34359738368,
  // (this cannot be represented as "1 << 35" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 36 */
  FIRE_WAVE_X = 68719476736,
  // (this cannot be represented as "1 << 36" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 37 */
  ACCELERATE_EX = 137438953472,
  // (this cannot be represented as "1 << 37" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 38 */
  BURST8 = 274877906944,
  // (this cannot be represented as "1 << 38" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 39 */
  FIRE_SPAWN = 549755813888,
  // (this cannot be represented as "1 << 39" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 40 */
  ANTI_GRAVITY = 1099511627776,
  // (this cannot be represented as "1 << 40" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 41 */
  TRACTOR_BEAM = 2199023255552,
  // (this cannot be represented as "1 << 41" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 42 */
  BOUNCE = 4398046511104,
  // (this cannot be represented as "1 << 42" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 43 */
  BOUNCE_FLOOR = 8796093022208,
  // (this cannot be represented as "1 << 43" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 44 */
  SHIELDED = 17592186044416,
  // (this cannot be represented as "1 << 44" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 45 */
  BLUE_FIRE_SPAWN = 35184372088832,
  // (this cannot be represented as "1 << 45" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 46 */
  LASER_SHOT = 70368744177664,
  // (this cannot be represented as "1 << 46" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 47 */
  GODHEAD = 140737488355328,
  // (this cannot be represented as "1 << 47" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 48 */
  SMART_PERFECT = 281474976710656,
  // (this cannot be represented as "1 << 48" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 49 */
  BURSTSPLIT = 562949953421312,
  // (this cannot be represented as "1 << 49" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 50 */
  WIGGLE_ROTGUT = 1125899906842624,
  // (this cannot be represented as "1 << 50" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 51 */
  FREEZE = 2251799813685248,
  // (this cannot be represented as "1 << 51" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 52 */
  ACCELERATE_TO_POSITION = 4503599627370496,
  // (this cannot be represented as "1 << 52" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 53 */
  BROCCOLI = 9007199254740992,
  // (this cannot be represented as "1 << 53" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 54 */
  BACKSPLIT = 18014398509481984,
  // (this cannot be represented as "1 << 54" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 55 */
  SIDEWAVE = 36028797018963968,
  // (this cannot be represented as "1 << 55" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 56 */
  ORBIT_PARENT = 72057594037927936,
  // (this cannot be represented as "1 << 56" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 57 */
  FADEOUT = 144115188075855872,
  // (this cannot be represented as "1 << 57" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)
}

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

declare enum DamageFlag {
  /** 1 << 0 */
  DAMAGE_NOKILL = 1 << 0,

  /** 1 << 1 */
  DAMAGE_FIRE = 1 << 1,

  /** 1 << 2 */
  DAMAGE_EXPLOSION = 1 << 2,

  /** 1 << 3 */
  DAMAGE_LASER = 1 << 3,

  /** 1 << 4 */
  DAMAGE_ACID = 1 << 4,

  /** 1 << 5 */
  DAMAGE_RED_HEARTS = 1 << 5,

  /** 1 << 6 */
  DAMAGE_COUNTDOWN = 1 << 6,

  /** 1 << 7 */
  DAMAGE_SPIKES = 1 << 7,

  /** 1 << 8 */
  DAMAGE_CLONES = 1 << 8,

  /** 1 << 9 */
  DAMAGE_POOP = 1 << 9,

  /** 1 << 10 */
  DAMAGE_DEVIL = 1 << 10,

  /** 1 << 11 */
  DAMAGE_ISSAC_HEART = 1 << 11,

  /** 1 << 12 */
  DAMAGE_TNT = 1 << 12,

  /** 1 << 13 */
  DAMAGE_INVINCIBLE = 1 << 13,

  /** 1 << 14 */
  DAMAGE_SPAWN_FLY = 1 << 14,

  /** 1 << 15 */
  DAMAGE_POISON_BURN = 1 << 15,

  /** 1 << 16 */
  DAMAGE_CURSED_DOOR = 1 << 16,

  /** 1 << 17 */
  DAMAGE_TIMER = 1 << 17,

  /** 1 << 18 */
  DAMAGE_IV_BAG = 1 << 18,

  /** 1 << 19 */
  DAMAGE_PITFALL = 1 << 19,

  /** 1 << 20 */
  DAMAGE_CHEST = 1 << 20,

  /** 1 << 21 */
  DAMAGE_FAKE = 1 << 21,

  /** 1 << 22 */
  DAMAGE_BOOGER = 1 << 22,

  /** 1 << 23 */
  DAMAGE_SPAWN_BLACK_HEART = 1 << 23,

  /** 1 << 24 */
  DAMAGE_CRUSH = 1 << 24,

  /** 1 << 25 */
  DAMAGE_NO_MODIFIERS = 1 << 25,

  /** 1 << 26 */
  DAMAGE_SPAWN_RED_HEART = 1 << 26,

  /** 1 << 27 */
  DAMAGE_SPAWN_COIN = 1 << 27,

  /** 1 << 28 */
  DAMAGE_NO_PENALTIES = 1 << 28,

  /** 1 << 29 */
  DAMAGE_SPAWN_TEMP_HEART = 1 << 29,

  /** 1 << 30 */
  DAMAGE_IGNORE_ARMOR = 1 << 30,

  /** 1 << 31 */
  DAMAGE_SPAWN_CARD = 2147483648,
  // (this cannot be represented as "1 << 31" because JavaScript only has 32-bit numbers and it will
  // be converted to the wrong number)

  /** 1 << 32 */
  DAMAGE_SPAWN_RUNE = 4294967296,
  // (this cannot be represented as "1 << 32" because JavaScript only has 32-bit numbers and it will
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

declare enum UseFlag {
  /**
   * Don't play use animations.
   *
   * 1 << 0
   */
  USE_NOANIM = 1 << 0,

  /**
   * Don't add costume.
   *
   * 1 << 1
   */
  USE_NOCOSTUME = 1 << 1,

  /**
   * Effect was triggered by an active item owned by the player.
   *
   * 1 << 2
   */
  USE_OWNED = 1 << 2,

  /**
   * Allow the effect to trigger on non-main players (i.e. coop babies).
   *
   * 1 << 3
   */
  USE_ALLOWNONMAIN = 1 << 3,

  /**
   * D4 only: Reroll the player's active item.
   *
   * 1 << 4
   */
  USE_REMOVEACTIVE = 1 << 4,

  /**
   * Effect was triggered a second time by Car Battery (or Tarot Cloth for cards).
   *
   * 1 << 5
   */
  USE_CARBATTERY = 1 << 5,

  /**
   * Effect was triggered by Void.
   *
   * 1 << 6
   */
  USE_VOID = 1 << 6,

  /**
   * Effect was mimicked by an active item (Blank Card, Placebo).
   *
   * 1 << 7
   */
  USE_MIMIC = 1 << 7,

  /**
   * Never play announcer voice.
   *
   * 1 << 8
   */
  USE_NOANNOUNCER = 1 << 8,

  /**
   * This allows an item to spawn wisps when called from another item usage as the wisps generator
   * checks for NOANIM, so usually you want to use this with NOANIM call.
   *
   * 1 << 9
   */
  USE_ALLOWWISPSPAWN = 1 << 9,

  /**
   * If set, forces UseActiveItem to use the CustomVarData argument instead of the active item's
   * stored VarData.
   *
   * 1 << 10
   */
  USE_CUSTOMVARDATA = 1 << 10,

  /**
   * Don't display text in the HUD. (This is currently only used by Echo Chamber.)
   *
   * 1 << 11
   */
  USE_NOHUD = 1 << 11,
}
