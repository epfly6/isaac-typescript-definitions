/**
 * For EntityType.ENTITY_TEAR (2)
 *
 * This is an object instead of a TypeScript enum because enums cannot be instantiated with
 * `BitSet128` objects.
 *
 * This enum was renamed from "TearFlags" to be consistent with the other flag enums.
 */
export const TearFlag = {
  /** Default tear (no special effects). */
  NORMAL: BitSet128(0, 0),

  /**
   * Goes through obstacles. Used by Ouija Board.
   *
   * 1 << 0
   */
  TEAR_SPECTRAL: getTearFlag(0),

  /**
   * Goes through enemies. Used by Cupid's Arrow.
   *
   * 1 << 1
   */
  TEAR_PIERCING: getTearFlag(1),

  /**
   * Used by Spoon Bender.
   *
   * 1 << 2
   */
  TEAR_HOMING: getTearFlag(2),

  /**
   * Slows enemies on contact. Used by Spider Bite.
   *
   * 1 << 3
   */
  TEAR_SLOW: getTearFlag(3),

  /**
   * Used by The Common Cold.
   *
   * 1 << 4
   */
  TEAR_POISON: getTearFlag(4),

  /**
   * Freezes enemies in place. (For the ice effect, see `TearFlags.TEAR_ICE`.) Used by Mom's
   * Contacts.
   *
   * 1 << 5
   */
  TEAR_FREEZE: getTearFlag(5),

  /**
   * Splits into two different tears on collision. Used by The Parasite.
   *
   * 1 << 6
   */
  TEAR_SPLIT: getTearFlag(6),

  /**
   * The tear increases in size and damage the longer it travels. Used by Lump of Coal.
   *
   * 1 << 7
   */
  TEAR_GROW: getTearFlag(7),

  /**
   * Returns backwards after traveling for a little while. Used by My Reflection.
   *
   * 1 << 8
   */
  TEAR_BOOMERANG: getTearFlag(8),

  /**
   * Keeps going past enemies that it kills (with less damage). Used by Polyphemus.
   *
   * 1 << 9
   */
  TEAR_PERSISTENT: getTearFlag(9),

  /**
   * Used by the Wiggle Worm trinket.
   *
   * 1 << 10
   */
  TEAR_WIGGLE: getTearFlag(10),

  /**
   * Created a blue fly on hit. Used by The Mulligan.
   *
   * 1 << 11
   */
  TEAR_MULLIGAN: getTearFlag(11),

  /**
   * Explodes on hit. Used by Ipecac.
   *
   * 1 << 12
   */
  TEAR_EXPLOSIVE: getTearFlag(12),

  /**
   * Used by Mom's Eyeshadow.
   *
   * 1 << 13
   */
  TEAR_CHARM: getTearFlag(13),

  /**
   * Used by Iron Bar.
   *
   * 1 << 14
   */
  TEAR_CONFUSION: getTearFlag(14),

  /**
   * Enemies killed have a 33% chance to drop a heart. Used by Tainted Magdalene.
   *
   * 1 << 15
   */
  TEAR_HP_DROP: getTearFlag(15),

  /**
   * Tears orbit around the player. Used by Tiny Planet.
   *
   * 1 << 16
   */
  TEAR_ORBIT: getTearFlag(16),

  /**
   * Floats in place until the player releases the fire button. Used by Anti-Gravity.
   *
   * 1 << 17
   */
  TEAR_WAIT: getTearFlag(17),

  /**
   * Splits into four different tears on collision. Used by Cricket's Body.
   *
   * 1 << 18
   */
  TEAR_QUAD_SPLIT: getTearFlag(18),

  /**
   * Bounces off of enemies, walls, rocks, and so on. Used by Rubber Cement.
   *
   * 1 << 19
   */
  TEAR_BOUNCE: getTearFlag(19),

  /**
   * Used by Mom's Perfume.
   *
   * 1 << 20
   */
  TEAR_FEAR: getTearFlag(20),

  /**
   * The tear shrinks the longer it travels. Used by Proptosis.
   *
   * 1 << 21
   */
  TEAR_SHRINK: getTearFlag(21),

  /**
   * Used by Fire Mind.
   *
   * 1 << 22
   */
  TEAR_BURN: getTearFlag(22),

  /**
   * Attracts enemies and pickups. Used by Strange Attractor.
   *
   * 1 << 23
   */
  TEAR_ATTRACTOR: getTearFlag(23),

  /**
   * Pushes enemies back further than normal.
   *
   * 1 << 24
   */
  TEAR_KNOCKBACK: getTearFlag(24),

  /**
   * Used by Pulse Worm.
   *
   * 1 << 25
   */
  TEAR_PULSE: getTearFlag(25),

  /**
   * Used by Ring Worm.
   *
   * 1 << 26
   */
  TEAR_SPIRAL: getTearFlag(26),

  /**
   * Used by Flat Worm.
   *
   * 1 << 27
   */
  TEAR_FLAT: getTearFlag(27),

  /**
   * Makes tears explode out of the bomb. Used by Sad Bombs.
   *
   * 1 << 28
   */
  TEAR_SAD_BOMB: getTearFlag(28),

  /**
   * Damages everything in the room when it explodes. Used by Butt Bombs.
   *
   * 1 << 29
   */
  TEAR_BUTT_BOMB: getTearFlag(29),

  /**
   * Used by Hook Worm.
   *
   * 1 << 30
   */
  TEAR_SQUARE: getTearFlag(30),

  /**
   * Creates an aura around the tear. Used by Godhead.
   *
   * 1 << 31
   */
  TEAR_GLOW: getTearFlag(31),

  /**
   * Slows enemies and colors them black. Used by Lil Gish.
   *
   * 1 << 32
   */
  TEAR_GISH: getTearFlag(32),

  /**
   * Spawns green creep on hit. Used by Mysterious Liquid.
   *
   * 1 << 33
   */
  TEAR_MYSTERIOUS_LIQUID_CREEP: getTearFlag(33),

  /**
   * Deletes projectiles that it collides with. Used by Lost Contact.
   *
   * 1 << 34
   */
  TEAR_SHIELDED: getTearFlag(34),

  /**
   * Spawns a pickup upon exploding. Used by Glitter Bombs.
   *
   * 1 << 35
   */
  TEAR_GLITTER_BOMB: getTearFlag(35),

  /**
   * Splits into 5 little bombs upon exploding. Used by Scatter Bombs.
   *
   * 1 << 36
   */
  TEAR_SCATTER_BOMB: getTearFlag(36),

  /**
   * Sticks to enemies and continues to deal damage. Used by Explosivo and Sticky Bombs.
   *
   * 1 << 37
   */
  TEAR_STICKY: getTearFlag(37),

  /**
   * Pass through walls to loop around the screen. Used by Continuum.
   *
   * 1 << 38
   */
  TEAR_CONTINUUM: getTearFlag(38),

  /**
   * Creates a light beam on hit. Used by Holy Light.
   *
   * 1 << 39
   */
  TEAR_LIGHT_FROM_HEAVEN: getTearFlag(39),

  /**
   * Spawns a coin on hit. Used by Bumbo.
   *
   * 1 << 40
   */
  TEAR_COIN_DROP: getTearFlag(40),

  /**
   * Enemies killed will spawn a black heart.
   *
   * 1 << 41
   */
  TEAR_BLACK_HP_DROP: getTearFlag(41),

  /**
   * Follows the parent player's beam. Used by Tractor Beam.
   *
   * 1 << 42
   */
  TEAR_TRACTOR_BEAM: getTearFlag(42),

  /**
   * Shrink enemies on hit. Used by God's Flesh.
   *
   * 1 << 43
   */
  TEAR_GODS_FLESH: getTearFlag(43),

  /**
   * Have a chance to spawn a coin on hit.
   *
   * 1 << 44
   */
  TEAR_GREED_COIN: getTearFlag(44),

  /**
   * Causes a large explosion in the shape of a cross. Used by Bomber Boy.
   *
   * 1 << 45
   */
  TEAR_CROSS_BOMB: getTearFlag(45),

  /**
   * Used by Ouroboros Worm.
   *
   * 1 << 46
   */
  TEAR_BIG_SPIRAL: getTearFlag(46),

  /**
   * Used by Glaucoma.
   *
   * 1 << 47
   */
  TEAR_PERMANENT_CONFUSION: getTearFlag(47),

  /**
   * Sticks to enemies and does damage over time. Used by Sinus Infection.
   *
   * 1 << 48
   */
  TEAR_BOOGER: getTearFlag(48),

  /**
   * Spawns creep on hit and spawns blue flies or spiders. Used by Parasitoid.
   *
   * 1 << 49
   */
  TEAR_EGG: getTearFlag(49),

  /**
   * Can open doors or break grid entities. Used by Sulfuric Acid.
   *
   * 1 << 50
   */
  TEAR_ACID: getTearFlag(50),

  /**
   * Splits into two tears. Used by Compound Fracture.
   *
   * 1 << 51
   */
  TEAR_BONE: getTearFlag(51),

  /**
   * Piercing. When passing through an enemy, gains homing and does double damage. Used by Eye of
   * Belial.
   *
   * 1 << 52
   */
  TEAR_BELIAL: getTearFlag(52),

  /**
   * Enemies turn gold and drop coins on death. Used by Midas' Touch.
   *
   * 1 << 53
   */
  TEAR_MIDAS: getTearFlag(53),

  /**
   * Used by Euthanasia.
   *
   * 1 << 54
   */
  TEAR_NEEDLE: getTearFlag(54),

  /**
   * Causes electricity to ripple around the room, damaging enemies. Used by Jacob's Ladder.
   *
   * 1 << 55
   */
  TEAR_JACOBS: getTearFlag(55),

  /**
   * Void tears. Instantly kills enemies. Used by Little Horn.
   *
   * 1 << 56
   */
  TEAR_HORN: getTearFlag(56),

  /**
   * Electricity arcs between tears. Used by Technology Zero.
   *
   * 1 << 57
   */
  TEAR_LASER: getTearFlag(57),

  /**
   * Tears stay in the air and bump into each other. Used by Pop!
   *
   * 1 << 58
   */
  TEAR_POP: getTearFlag(58),

  /**
   * Tears combine when they collide into each other. Used by Lachryphagy.
   *
   * 1 << 59
   */
  TEAR_ABSORB: getTearFlag(59),

  /**
   * Lasers are generated on top of the tear. Used by Trisagion.
   *
   * 1 << 60
   */
  TEAR_LASER_SHOT: getTearFlag(60),

  /**
   * Continually bounces as it travels. Used by Flat Stone.
   *
   * 1 << 61
   */
  TEAR_HYDRO_BOUNCE: getTearFlag(61),

  /**
   * Arcing shots that split into smaller tears on impact. Used by Haemolacria.
   *
   * 1 << 62
   */
  TEAR_BURST_SPLIT: getTearFlag(62),

  /**
   * Spawns green creep. Used by Bob's Bladder.
   *
   * 1 << 63
   */
  TEAR_CREEP_TRAIL: getTearFlag(63),

  /**
   * Knockback tears. Used by Knockout Drops.
   *
   * 1 << 64
   */
  TEAR_PUNCH: getTearFlag(64),

  /**
   * Enemies become frozen on death. (For the freeze-in-place effect, see `TearFlags.FREEZE`.)
   *
   * 1 << 65
   */
  TEAR_ICE: getTearFlag(65),

  /**
   * Enemies being magnetized and pull other things towards them. Used by Lodestone.
   *
   * 1 << 66
   */
  TEAR_MAGNETIZE: getTearFlag(66),

  /**
   * Marks enemies. Marked enemies will attack and damage each other, as well as have reduced
   * movement speed. Used by Rotten Tomato.
   *
   * 1 << 67
   */
  TEAR_BAIT: getTearFlag(67),

  /**
   * Velocity can be adjusted by the player while in the air. Used by Eye of the Occult.
   *
   * 1 << 68
   */
  TEAR_OCCULT: getTearFlag(68),

  /**
   * Tears orbit in a narrow and stable orbit. Used by Saturnus.
   *
   * 1 << 69
   */
  TEAR_ORBIT_ADVANCED: getTearFlag(69),

  /**
   * Chance to break rocks and open doors. Deals extra damage to rock-type enemies.
   *
   * 1 << 70
   */
  TEAR_ROCK: getTearFlag(70),

  /**
   * Tears turn and go horizontally when moving past an enemy. Used by Brain Worm.
   *
   * 1 << 71
   */
  TEAR_TURN_HORIZONTAL: getTearFlag(71),

  /**
   * Spawns red creep.
   *
   * 1 << 72
   */
  TEAR_BLOOD_BOMB: getTearFlag(72),

  /**
   * Enemies are turned into poop.
   *
   * 1 << 73
   */
  TEAR_ECOLI: getTearFlag(73),

  /**
   * Enemies have a chance to drop a coin on death. Used by The Hanged Man?
   *
   * 1 << 74
   */
  TEAR_COIN_DROP_DEATH: getTearFlag(74),

  /**
   * Explosion creates a Brimstone laser cross pattern.
   *
   * 1 << 75
   */
  TEAR_BRIMSTONE_BOMB: getTearFlag(75),

  /**
   * Creates a black hole on impact.
   *
   * 1 << 76
   */
  TEAR_RIFT: getTearFlag(76),

  /**
   * Sticks to enemies and multiplies on enemy death.
   *
   * 1 << 77
   */
  TEAR_SPORE: getTearFlag(77),

  /**
   * Spawns a ghost upon explosion.
   *
   * 1 << 78
   */
  TEAR_GHOST_BOMB: getTearFlag(78),

  /**
   * Killed enemies will drop a random tarot card.
   *
   * 1 << 79
   */
  TEAR_CARD_DROP_DEATH: getTearFlag(79),

  /**
   * Killed enemies will drop a random rune.
   *
   * 1 << 80
   */
  TEAR_RUNE_DROP_DEATH: getTearFlag(80),

  /**
   * Enemies will teleport to a different part of the room on hit.
   *
   * 1 << 81
   */
  TEAR_TELEPORT: getTearFlag(81),

  /**
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 115
   */
  TEAR_REROLL_ROCK_WISP: getTearFlag(115),

  /**
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 116
   */
  TEAR_MOM_STOMP_WISP: getTearFlag(116),

  /**
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 117
   */
  TEAR_ENEMY_TO_WISP: getTearFlag(117),

  /**
   * Chance to reroll the enemy on hit. Used by D10 wisps.
   *
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 118
   */
  TEAR_REROLL_ENEMY: getTearFlag(118),

  /**
   * Causes giant explosions that create pits. Used by Giga Bombs.
   *
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 119
   */
  TEAR_GIGA_BOMB: getTearFlag(119),

  /**
   * Enemies explode into more gibs on death than normal. Used by Berserk!
   *
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 120
   */
  TEAR_EXTRA_GORE: getTearFlag(120),

  /**
   * Lasers cycle between colors, causing a rainbow effect.
   *
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 121
   */
  TEAR_RAINBOW: getTearFlag(121),

  /**
   * Bombs can be detonated by Remote Detonator.
   *
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 122
   */
  TEAR_DETONATE: getTearFlag(122),

  /**
   * Tears stick to each other and form a chain that can be swung around. Used by Akeldama.
   *
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 123
   */
  TEAR_CHAIN: getTearFlag(123),

  /**
   * Black aura effect. Used by Dark Matter.
   *
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 124
   */
  TEAR_DARK_MATTER: getTearFlag(124),

  /**
   * Bombs dropped while having a Golden Bomb will have this flag.
   *
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 125
   */
  TEAR_GOLDEN_BOMB: getTearFlag(125),

  /**
   * Bombs dropped while having Fast Bombs will have this flag.
   *
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 126
   */
  TEAR_FAST_BOMB: getTearFlag(126),

  /**
   * A single tear controlled by the player with the shooting keys. Used by The Ludovico Technique.
   *
   * This is a reserved flag and cannot be randomly picked.
   *
   * 1 << 127
   */
  TEAR_LUDOVICO: getTearFlag(127),
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TearFlag = BitSet128 & { __tearFlagBrand: void };

// cspell:disable-next-line
/** The same as the `TEARFLAG` function in "enums.lua". */
function getTearFlag(shift: int) {
  return shift >= 64
    ? BitSet128(0, 1 << (shift - 64))
    : BitSet128(1 << shift, 0);
}
