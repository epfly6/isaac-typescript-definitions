/* eslint-disable @typescript-eslint/member-ordering */

import { EntityType } from "../../enums/EntityType";
import { CacheFlag } from "../../enums/flags/CacheFlag";
import { DamageFlag } from "../../enums/flags/DamageFlag";
import { UseFlag } from "../../enums/flags/UseFlag";
import { InputHook } from "../../enums/InputHook";
import { ItemPoolType } from "../../enums/ItemPoolType";
import { ModCallback } from "../../enums/ModCallback";
import { PillEffect } from "../../enums/PillEffect";

declare global {
  interface AddCallbackParameter {
    [ModCallback.POST_NPC_UPDATE]: [
      callback: (npc: EntityNPC) => void,
      entityType?: EntityType | int,
    ];
    [ModCallback.POST_UPDATE]: [callback: () => void];
    [ModCallback.POST_RENDER]: [callback: () => void];
    [ModCallback.POST_USE_ITEM]: [
      callback: (
        collectibleType: CollectibleType | int,
        rng: RNG,
        player: EntityPlayer,
        useFlags: BitFlags<UseFlag>,
        activeSlot: int,
        customVarData: int,
      ) =>
        | boolean
        | { Discharge: boolean; Remove: boolean; ShowAnim: boolean }
        | void,
      collectibleType?: CollectibleType | int,
    ];
    [ModCallback.POST_PEFFECT_UPDATE]: [
      callback: (player: EntityPlayer) => void,
      playerType?: PlayerType | int,
    ];
    [ModCallback.POST_USE_CARD]: [
      callback: (
        card: Card | int,
        player: EntityPlayer,
        useFlags: BitFlags<UseFlag>,
      ) => void,
      card?: Card | int,
    ];
    [ModCallback.POST_FAMILIAR_UPDATE]: [
      callback: (familiar: EntityFamiliar) => void,
      familiarVariant?: FamiliarVariant | int,
    ];
    [ModCallback.POST_FAMILIAR_INIT]: [
      callback: (familiar: EntityFamiliar) => void,
      familiarVariant?: FamiliarVariant | int,
    ];
    [ModCallback.EVALUATE_CACHE]: [
      callback: (player: EntityPlayer, cacheFlag: CacheFlag) => void,
      cacheFlag?: CacheFlag,
    ];
    [ModCallback.POST_PLAYER_INIT]: [
      callback: (player: EntityPlayer) => void,
      playerVariant?: PlayerVariant,
    ];
    [ModCallback.POST_USE_PILL]: [
      callback: (
        pillEffect: PillEffect | int,
        player: EntityPlayer,
        useFlags: BitFlags<UseFlag>,
      ) => void,
      pillEffect?: PillEffect | int,
    ];
    [ModCallback.ENTITY_TAKE_DMG]: [
      callback: (
        tookDamage: Entity,
        damageAmount: float,
        damageFlags: BitFlags<DamageFlag>,
        damageSource: EntityRef,
        damageCountdownFrames: int,
      ) => boolean | void,
      entityType?: EntityType | int,
    ];
    [ModCallback.POST_CURSE_EVAL]: [callback: (curses: int) => int | void];
    [ModCallback.INPUT_ACTION]: [
      callback: (
        entity: Entity | undefined,
        inputHook: InputHook,
        buttonAction: ButtonAction,
      ) => boolean | float | void,
      inputHook?: InputHook,
    ];
    [ModCallback.POST_GAME_STARTED]: [callback: (isContinued: boolean) => void];
    [ModCallback.POST_GAME_END]: [callback: (isGameOver: boolean) => void];
    [ModCallback.PRE_GAME_EXIT]: [callback: (shouldSave: boolean) => void];
    [ModCallback.POST_NEW_LEVEL]: [callback: () => void];
    [ModCallback.POST_NEW_ROOM]: [callback: () => void];
    [ModCallback.GET_CARD]: [
      callback: (
        rng: RNG,
        card: Card | int,
        includePlayingCards: boolean,
        includeRunes: boolean,
        onlyRunes: boolean,
      ) => Card | int | void,
    ];
    [ModCallback.GET_SHADER_PARAMS]: [
      callback: (shaderName: string) => Record<string, unknown> | void,
    ];
    [ModCallback.EXECUTE_CMD]: [
      callback: (
        command: string,
        parameters: string,
        player: EntityPlayer,
      ) => void,
    ];
    [ModCallback.PRE_USE_ITEM]: [
      callback: (
        collectibleType: CollectibleType | int,
        rng: RNG,
        player: EntityPlayer,
        useFlags: BitFlags<UseFlag>,
        activeSlot: int,
        customVarData: int,
      ) => boolean | void,
      collectibleType?: CollectibleType | int,
    ];
    [ModCallback.PRE_ENTITY_SPAWN]: [
      callback: (
        entityType: EntityType | int,
        variant: int,
        subType: int,
        position: Vector,
        velocity: Vector,
        spawner: Entity,
        initSeed: Seed,
      ) => [EntityType | int, int, int, int] | void,
    ];
    [ModCallback.POST_FAMILIAR_RENDER]: [
      callback: (entityFamiliar: EntityFamiliar, renderOffset: Vector) => void,
      familiarVariant?: FamiliarVariant | int,
    ];
    [ModCallback.PRE_FAMILIAR_COLLISION]: [
      callback: (
        familiar: EntityFamiliar,
        collider: Entity,
        low: boolean,
      ) => boolean | void,
      familiarVariant?: FamiliarVariant | int,
    ];
    [ModCallback.POST_NPC_INIT]: [
      callback: (npc: EntityNPC) => void,
      entityType?: EntityType | int,
    ];
    [ModCallback.POST_NPC_RENDER]: [
      callback: (npc: EntityNPC, renderOffset: Vector) => void,
      entityType?: EntityType | int,
    ];
    [ModCallback.POST_NPC_DEATH]: [
      callback: (npc: EntityNPC) => void,
      entityType?: EntityType | int,
    ];
    [ModCallback.PRE_NPC_COLLISION]: [
      callback: (
        npc: EntityNPC,
        collider: Entity,
        low: boolean,
      ) => boolean | void,
      entityType?: EntityType | int,
    ];
    [ModCallback.POST_PLAYER_UPDATE]: [
      callback: (player: EntityPlayer) => void,
      playerVariant?: PlayerVariant,
    ];
    [ModCallback.POST_PLAYER_RENDER]: [
      callback: (player: EntityPlayer, renderOffset: Vector) => void,
      playerVariant?: PlayerVariant,
    ];
    [ModCallback.PRE_PLAYER_COLLISION]: [
      callback: (
        player: EntityPlayer,
        collider: Entity,
        low: boolean,
      ) => boolean | void,
      playerVariant?: PlayerVariant,
    ];
    [ModCallback.POST_PICKUP_INIT]: [
      callback: (pickup: EntityPickup) => void,
      pickupVariant?: PickupVariant | int,
    ];
    [ModCallback.POST_PICKUP_UPDATE]: [
      callback: (pickup: EntityPickup) => void,
      pickupVariant?: PickupVariant | int,
    ];
    [ModCallback.POST_PICKUP_RENDER]: [
      callback: (pickup: EntityPickup, renderOffset: Vector) => void,
      pickupVariant?: PickupVariant | int,
    ];
    [ModCallback.POST_PICKUP_SELECTION]: [
      callback: (
        pickup: EntityPickup,
        variant: PickupVariant | int,
        subType: int,
      ) => [PickupVariant | int, int] | void,
    ];
    [ModCallback.PRE_PICKUP_COLLISION]: [
      callback: (
        pickup: EntityPickup,
        collider: Entity,
        low: boolean,
      ) => boolean | void,
      pickupVariant?: PickupVariant | int,
    ];
    [ModCallback.POST_TEAR_INIT]: [
      callback: (tear: EntityTear) => void,
      tearVariant?: TearVariant | int,
    ];
    [ModCallback.POST_TEAR_UPDATE]: [
      callback: (tear: EntityTear) => void,
      tearVariant?: TearVariant | int,
    ];
    [ModCallback.POST_TEAR_RENDER]: [
      callback: (tear: EntityTear, renderOffset: Vector) => void,
      tearVariant?: TearVariant | int,
    ];
    [ModCallback.PRE_TEAR_COLLISION]: [
      callback: (
        tear: EntityTear,
        collider: Entity,
        low: boolean,
      ) => boolean | void,
      tearVariant?: TearVariant | int,
    ];
    [ModCallback.POST_PROJECTILE_INIT]: [
      callback: (projectile: EntityProjectile) => void,
      projectileVariant?: ProjectileVariant | int,
    ];
    [ModCallback.POST_PROJECTILE_UPDATE]: [
      callback: (projectile: EntityProjectile) => void,
      projectileVariant?: ProjectileVariant | int,
    ];
    [ModCallback.POST_PROJECTILE_RENDER]: [
      callback: (projectile: EntityProjectile, renderOffset: Vector) => void,
      projectileVariant?: ProjectileVariant | int,
    ];
    [ModCallback.PRE_PROJECTILE_COLLISION]: [
      callback: (
        projectile: EntityProjectile,
        collider: Entity,
        low: boolean,
      ) => boolean | void,
      projectileVariant?: ProjectileVariant | int,
    ];
    [ModCallback.POST_LASER_INIT]: [
      callback: (laser: EntityLaser) => void,
      laserVariant?: LaserVariant | int,
    ];
    [ModCallback.POST_LASER_UPDATE]: [
      callback: (laser: EntityLaser) => void,
      laserVariant?: LaserVariant | int,
    ];
    [ModCallback.POST_LASER_RENDER]: [
      callback: (laser: EntityLaser, renderOffset: Vector) => void,
      laserVariant?: LaserVariant | int,
    ];
    [ModCallback.POST_KNIFE_INIT]: [
      callback: (knife: EntityKnife) => void,
      knifeSubType?: int,
    ];
    [ModCallback.POST_KNIFE_UPDATE]: [
      callback: (knife: EntityKnife) => void,
      knifeSubType?: int,
    ];
    [ModCallback.POST_KNIFE_RENDER]: [
      callback: (knife: EntityKnife, renderOffset: Vector) => void,
      knifeSubType?: int,
    ];
    [ModCallback.PRE_KNIFE_COLLISION]: [
      callback: (
        knife: EntityKnife,
        collider: Entity,
        low: boolean,
      ) => boolean | void,
      knifeSubType?: int,
    ];
    [ModCallback.POST_EFFECT_INIT]: [
      callback: (effect: EntityEffect) => void,
      effectVariant?: EffectVariant | int,
    ];
    [ModCallback.POST_EFFECT_UPDATE]: [
      callback: (effect: EntityEffect) => void,
      effectVariant?: EffectVariant | int,
    ];
    [ModCallback.POST_EFFECT_RENDER]: [
      callback: (effect: EntityEffect, renderOffset: Vector) => void,
      effectVariant?: EffectVariant | int,
    ];
    [ModCallback.POST_BOMB_INIT]: [
      callback: (bomb: EntityBomb) => void,
      bombVariant?: BombVariant | int,
    ];
    [ModCallback.POST_BOMB_UPDATE]: [
      callback: (bomb: EntityBomb) => void,
      bombVariant?: BombVariant | int,
    ];
    [ModCallback.POST_BOMB_RENDER]: [
      callback: (bomb: EntityBomb, renderOffset: Vector) => void,
      bombVariant?: BombVariant | int,
    ];
    [ModCallback.PRE_BOMB_COLLISION]: [
      callback: (
        bomb: EntityBomb,
        collider: Entity,
        low: boolean,
      ) => boolean | void,
      bombVariant?: BombVariant | int,
    ];
    [ModCallback.POST_FIRE_TEAR]: [callback: (tear: EntityTear) => void];
    [ModCallback.PRE_GET_COLLECTIBLE]: [
      callback: (
        itemPoolType: ItemPoolType,
        decrease: boolean,
        seed: Seed,
      ) => CollectibleType | int | void,
    ];
    [ModCallback.POST_GET_COLLECTIBLE]: [
      callback: (
        collectibleType: CollectibleType | int,
        itemPoolType: ItemPoolType,
        decrease: boolean,
        seed: Seed,
      ) => CollectibleType | int | void,
    ];
    [ModCallback.GET_PILL_COLOR]: [callback: (seed: Seed) => PillColor | void];
    [ModCallback.GET_PILL_EFFECT]: [
      callback: (
        pillEffect: PillEffect | int,
        pillColor: PillColor,
      ) => PillEffect | int | void,
    ];
    [ModCallback.GET_TRINKET]: [
      callback: (
        trinketType: TrinketType | int,
        rng: RNG,
      ) => TrinketType | int | void,
    ];
    [ModCallback.POST_ENTITY_REMOVE]: [
      callback: (entity: Entity) => void,
      entityType?: EntityType | int,
    ];
    [ModCallback.POST_ENTITY_KILL]: [
      callback: (entity: Entity) => void,
      entityType?: EntityType | int,
    ];
    [ModCallback.PRE_NPC_UPDATE]: [
      callback: (npc: EntityNPC) => boolean | void,
      entityType?: EntityType | int,
    ];
    [ModCallback.PRE_SPAWN_CLEAN_AWARD]: [
      callback: (rng: RNG, spawnPosition: Vector) => boolean | void,
    ];
    [ModCallback.PRE_ROOM_ENTITY_SPAWN]: [
      callback: (
        entityType: EntityType | int,
        variant: int,
        subType: int,
        gridIndex: int,
        seed: Seed,
      ) => [EntityType | int, int, int] | void,
    ];
  }
}
