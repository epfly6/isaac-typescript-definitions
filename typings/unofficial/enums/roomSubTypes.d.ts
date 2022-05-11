/**
 * For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_SHOP (2)
 *
 * This matches the sub-type in the "00.special rooms.stb" file.
 */
declare const enum ShopSubType {
  LEVEL_1 = 0,
  LEVEL_2 = 1,
  LEVEL_3 = 2,
  LEVEL_4 = 3,
  LEVEL_5 = 4,
  RARE_GOOD = 10,
  RARE_BAD = 11,
  TAINTED_KEEPER_LEVEL_1 = 100,
  TAINTED_KEEPER_LEVEL_2 = 101,
  TAINTED_KEEPER_LEVEL_3 = 102,
  TAINTED_KEEPER_LEVEL_4 = 103,
  TAINTED_KEEPER_LEVEL_5 = 104,
  TAINTED_KEEPER_RARE_GOOD = 110,
  TAINTED_KEEPER_RARE_BAD = 111,
}

/**
 * For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_TREASURE (4)
 *
 * This matches the sub-type in the "00.special rooms.stb" file and elsewhere.
 */
declare const enum TreasureRoomSubType {
  NORMAL = 0,
  MORE_OPTIONS = 1,
  PAY_TO_WIN = 2,
  MORE_OPTIONS_AND_PAY_TO_WIN = 3,
  KNIFE_PIECE = 34,
}

/**
 * For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_BOSS (5)
 *
 * This matches the sub-type in the "00.special rooms.stb" file.
 * The enum is named this way to match the `Entity.GetBossID`, `Room.GetBossID` and
 * `Room.GetSecondBossID` methods.
 */
declare const enum BossID {
  MONSTRO = 1,
  LARRY_JR = 2,
  CHUB = 3,
  GURDY = 4,
  MONSTRO_II = 5,
  MOM = 6,
  SCOLEX = 7,
  MOMS_HEART = 8,
  FAMINE = 9,
  PESTILENCE = 10,
  WAR = 11,
  DEATH = 12,
  DUKE_OF_FLIES = 13,
  PEEP = 14,
  LOKI = 15,
  BLASTOCYST = 16,
  GEMINI = 17,
  FISTULA = 18,
  GISH = 19,
  STEVEN = 20,
  CHAD = 21,
  HEADLESS_HORSEMAN = 22,
  THE_FALLEN = 23,
  SATAN = 24,
  IT_LIVES = 25,
  THE_HOLLOW = 26,
  THE_CARRION_QUEEN = 27,
  GURDY_JR = 28,
  THE_HUSK = 29,
  THE_BLOAT = 30,
  LOKII = 31,
  THE_BLIGHTED_OVUM = 32,
  TERATOMA = 33,
  THE_WIDOW = 34,
  MASK_OF_INFAMY = 35,
  THE_WRETCHED = 36,
  PIN = 37,
  CONQUEST = 38,
  ISAAC = 39,

  /** Also known as "???". */
  BLUE_BABY = 40,

  DADDY_LONG_LEGS = 41,
  TRIACHNID = 42,
  THE_HAUNT = 43,
  DINGLE = 44,
  MEGA_MAW = 45,

  /** The Gate */
  MEGA_MAW_II = 46,

  MEGA_FATTY = 47,

  /** The Cage */
  MEGA_FATTY_II = 48,

  MEGA_GURDY = 49,
  DARK_ONE = 50,

  /** The Adversary */
  DARK_ONE_II = 51,

  POLYCEPHALUS = 52,
  MEGA_FRED = 53,
  THE_LAMB = 54,
  MEGA_SATAN = 55,
  GURGLINGS = 56,
  THE_STAIN = 57,
  BROWNIE = 58,
  THE_FORSAKEN = 59,
  LITTLE_HORN = 60,
  RAG_MAN = 61,
  ULTRA_GREED = 62,
  HUSH = 63,
  DANGLE = 64,
  TURDLING = 65,
  THE_FRAIL = 66,
  RAG_MEGA = 67,
  SISTERS_VIS = 68,
  BIG_HORN = 69,
  DELIRIUM = 70,
  THE_MATRIARCH = 72,
  THE_PILE = 73,
  REAP_CREEP = 74,
  BEELZEBLUB = 75,
  WORMWOOD = 76,
  RAINMAKER = 77,
  THE_VISAGE = 78,
  THE_SIREN = 79,
  TUFF_TWINS = 80,
  THE_HERETIC = 81,
  HORNFEL = 82,
  GREAT_GIDEON = 83,
  BABY_PLUM = 84,
  THE_SCOURGE = 85,
  CHIMERA = 86,
  ROTGUT = 87,
  MOTHER = 88,
  MAUSOLEUM_MOM = 89,
  MAUSOLEUM_MOMS_HEART = 90,
  MIN_MIN = 91,
  CLOG = 92,
  SINGE = 93,
  BUMBINO = 94,
  COLOSTOMIA = 95,
  THE_SHELL = 96,
  TURDLET = 97,

  /** This boss is currently unfinished and there are no boss rooms for it. */
  RAGLICH = 98,

  /** Dogma does not have its own boss rooms; it appears in a normal room. */
  DOGMA = 99,

  /** The Beast does not have its own boss rooms; it appears in a crawlspace. */
  BEAST = 100,

  HORNY_BOYS = 101,

  POSSESSOR = 102,
}

/**
 * For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_MINIBOSS (6)
 *
 * This matches the sub-type in the "00.special rooms.stb" file.
 * The enum is named this way to match the `BossID` enum.
 */
declare const enum MinibossID {
  SLOTH = 0,
  LUST = 1,
  WRATH = 2,
  GLUTTONY = 3,
  GREED = 4,
  ENVY = 5,
  PRIDE = 6,
  SUPER_SLOTH = 7,
  SUPER_LUST = 8,
  SUPER_WRATH = 9,
  SUPER_GLUTTONY = 10,
  SUPER_GREED = 11,
  SUPER_ENVY = 12,
  SUPER_PRIDE = 13,
  ULTRA_PRIDE = 14,
  KRAMPUS = 15,
}

// For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_SUPERSECRET (8), the sub-type corresponds to the
// BackdropType enum

/**
 * For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_CURSE (10)
 *
 * This matches the sub-type in the "00.special rooms.stb" file.
 */
declare const enum CurseRoomSubType {
  NORMAL = 0,
  VOODOO_HEAD = 1,
}

/**
 * For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_CHALLENGE (11)
 *
 * This matches the sub-type in the "00.special rooms.stb" file and elsewhere.
 */
declare const enum ChallengeRoomSubType {
  NORMAL = 10,
  BOSS = 11,
  GREAT_GIDEON = 12,
}

/**
 * For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_LIBRARY (12)
 *
 * This matches the sub-type in the "00.special rooms.stb" file.
 */
declare const enum LibrarySubType {
  UNKNOWN_0 = 0,
  UNKNOWN_1 = 1,
  UNKNOWN_2 = 2,
  UNKNOWN_3 = 3,
  UNKNOWN_4 = 4,
}

/**
 * For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_DEVIL (14)
 *
 * This matches the sub-type in the "00.special rooms.stb" file.
 */
declare const enum DevilRoomSubType {
  NORMAL = 0,
  NUMBER_SIX_TRINKET = 1,
}

/**
 * For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_ANGEL (15)
 *
 * This matches the sub-type in the "00.special rooms.stb" file.
 */
declare const enum AngelRoomSubType {
  NORMAL = 0,

  /** This is the kind of Angel Room that appears when players have The Stairway collectible. */
  SHOP = 1,
}

/**
 * For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_DUNGEON (16)
 *
 * This matches the sub-type in the "00.special rooms.stb" file and elsewhere.
 */
declare const enum DungeonSubType {
  NORMAL = 0,

  /** This is the room uncovered by throwing a Chaos Card at Great Gideon. */
  GIDEONS_GRAVE = 1,

  /** This is the room for the second phase of Rotgut. */
  ROTGUT_MAGGOT = 2,

  /** This is the room for the third phase of Rotgut. */
  ROTGUT_HEART = 3,

  BEAST_ROOM = 4,
}

/**
 * For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_ISAACS (18)
 *
 * This matches the sub-type in the "00.special rooms.stb" file.
 *
 * ("RoomType.ROOM_ISAACS" is a clean bedroom.)
 */
declare const enum IsaacsRoomSubType {
  NORMAL = 0,
  GENESIS = 99,
}

/**
 * For StageID.SPECIAL_ROOMS (0), RoomType.ROOM_SECRET_EXIT (27)
 *
 * This matches the sub-type in the "00.special rooms.stb" file.
 */
declare const enum SecretExitSubType {
  DOWNPOUR = 1,
  MINES = 2,
  MAUSOLEUM = 3,
}

/**
 * For StageID.DOWNPOUR (27) and StageID.DROSS (28)
 *
 * For RoomType.ROOM_DEFAULT (1)
 *
 * This matches the sub-type in the "27.downpour.stb" and "28.dross.stb" files.
 */
declare const enum DownpourRoomSubType {
  NORMAL = 0,
  WHITE_FIRE = 1,
  MIRROR = 34,
}

/**
 * For StageID.MINES (29) and StageID.ASHPIT (30)
 *
 * For RoomType.ROOM_DEFAULT (1)
 *
 * This matches the sub-type in the "29.mines.stb" and "30.ashpit.stb" files.
 */
declare const enum MinesRoomSubType {
  NORMAL = 0,
  BUTTON_ROOM = 1,
  MINESHAFT_ENTRANCE = 10,
  MINESHAFT_LOBBY = 11,
  MINESHAFT_KNIFE_PIECE = 20,
  MINESHAFT_ROOM_PRE_CHASE = 30,
  MINESHAFT_ROOM_POST_CHASE = 31,
}

/**
 * For StageID.HOME (35), RoomType.ROOM_DEFAULT (1)
 *
 * This matches the sub-type in the "35.home.stb" file.
 */
declare const enum HomeRoomSubType {
  ISAACS_BEDROOM = 0,
  HALLWAY = 1,
  MOMS_BEDROOM = 2,
  LIVING_ROOM = 3,
  CLOSET_RIGHT = 10,
  CLOSET_LEFT = 11,
  DEATH_CERTIFICATE_ENTRANCE = 33,
  DEATH_CERTIFICATE_ITEMS = 34,
}

/**
 * For StageID.BACKWARDS (36), RoomType.ROOM_DEFAULT (1)
 *
 * This matches the sub-type in the "36.backwards.stb" file.
 */
declare const enum BackwardsRoomSubType {
  EXIT = 0,
  BASEMENT = 1,
  CAVES = 4,
  DEPTHS = 7,
  DOWNPOUR = 27,
  MINES = 29,
  MAUSOLEUM = 31,
}
