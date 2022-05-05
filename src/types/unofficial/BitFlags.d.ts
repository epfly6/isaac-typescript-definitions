type BitFlags<T extends BitFlag | BitFlag128> = number & {
  readonly __bitFlagsBrand: T;
};
