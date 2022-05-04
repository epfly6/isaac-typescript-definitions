/**
 * The type of a grid entity as represented in a room XML/STB file.
 * This is converted by the game to the GridEntityType enum.
 * The `gridspawn` console command accepts GridEntityXMLType instead of GridEntityType.
 */
declare const enum GridEntityXMLType {
  ROCK = 1000,
  ROCK_BOMB = 1001,

  /** A pot, mushroom, or skull, depending on the stage and room type. */
  ROCK_ALT = 1002,

  /** A tinted rock. */
  ROCKT = 1003,

  /** A marked skull that will drop a Fool card. */
  ROCK_ALT2 = 1008,

  /**
   * Rocks that will be destroyed when other nearby rocks are. In-game, it will be a
   * GridEntityType.GRID_ROCK with a VarData of 1.
   */
  ROCK_EVENT = 1009,

  ROCK_SPIKED = 1010,
  ROCK_GOLD = 1011,
  TNT = 1300,
  FIREPLACE = 1400,
  RED_FIREPLACE = 1410,

  POOP_RED = 1490,
  POOP_RAINBOW = 1494,
  POOP_CORN = 1495,
  POOP_GOLDEN = 1496,
  POOP_BLACK = 1497,
  POOP_WHITE = 1498,
  POOP_GIGA = 1499,
  POOP = 1500,
  POOP_CHARMING = 1501,

  /** A block. */
  ROCKB = 1900,

  PILLAR = 1901,
  SPIKES = 1930,
  SPIKES_ONOFF = 1931,
  SPIDERWEB = 1940,
  WALL = 1999,
  PIT = 3000,
  FISSURE_SPAWNER = 3001,
  PIT_EVENT = 3009,
  LOCK = 4000,
  PRESSURE_PLATE = 4500,
  STATUE_DEVIL = 5000,
  STATUE_ANGEL = 5001,
  TELEPORTER = 6100,
  TRAPDOOR = 9000,
  STAIRS = 9100,
  GRAVITY = 10000,
}
