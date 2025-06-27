import { Road } from "./road";
import { RoadSequence } from "./roadSequence";

export const emptyContainers: Containers = {
  small: 0,
  medium: 0,
  large: 0,
  extraLarge: 0,
  extraLarge1: 0,
  extraLarge2: 0,
  extraLarge3: 0,
};

export function convertToCargo(road: Road) {
  const metalContainers: Containers = {
    small: 0,
    medium: 0,
    large: 0,
    extraLarge: 0,
    extraLarge1: 0,
    extraLarge2: 0,
    extraLarge3: 0,
  };
  const ceramicContainers: Containers = {
    small: 0,
    medium: 0,
    large: 0,
    extraLarge: 0,
    extraLarge1: 0,
    extraLarge2: 0,
    extraLarge3: 0,
  };
  let remainingMetals = road.requiredMetals;
  let remainingCeramics = road.requiredCeramics;

  while (remainingMetals > 0) {
    if (remainingMetals - metalSizes.extraLarge3 >= 0) {
      metalContainers.extraLarge3++;
      remainingMetals = remainingMetals - metalSizes.extraLarge3;
    } else if (remainingMetals - metalSizes.extraLarge2 >= 0) {
      metalContainers.extraLarge2++;
      remainingMetals = remainingMetals - metalSizes.extraLarge2;
    } else if (remainingMetals - metalSizes.extraLarge1 >= 0) {
      metalContainers.extraLarge1++;
      remainingMetals = remainingMetals - metalSizes.extraLarge1;
    } else if (remainingMetals - metalSizes.extraLarge >= 0) {
      metalContainers.extraLarge++;
      remainingMetals = remainingMetals - metalSizes.extraLarge;
    } else if (remainingMetals - metalSizes.large >= 0) {
      metalContainers.large++;
      remainingMetals = remainingMetals - metalSizes.large;
    } else if (remainingMetals - metalSizes.medium >= 0) {
      metalContainers.medium++;
      remainingMetals = remainingMetals - metalSizes.medium;
    } else {
      metalContainers.small++;
      remainingMetals = remainingMetals - metalSizes.small;
    }
  }
  while (remainingCeramics > 0) {
    if (remainingCeramics - ceramicSizes.extraLarge3 >= 0) {
      ceramicContainers.extraLarge3++;
      remainingCeramics = remainingCeramics - ceramicSizes.extraLarge3;
    } else if (remainingCeramics - ceramicSizes.extraLarge2 >= 0) {
      ceramicContainers.extraLarge2++;
      remainingCeramics = remainingCeramics - ceramicSizes.extraLarge2;
    } else if (remainingCeramics - ceramicSizes.extraLarge1 >= 0) {
      ceramicContainers.extraLarge1++;
      remainingCeramics = remainingCeramics - ceramicSizes.extraLarge1;
    } else if (remainingCeramics - ceramicSizes.extraLarge >= 0) {
      ceramicContainers.extraLarge++;
      remainingCeramics = remainingCeramics - ceramicSizes.extraLarge;
    } else if (remainingCeramics - ceramicSizes.large >= 0) {
      ceramicContainers.large++;
      remainingCeramics = remainingCeramics - ceramicSizes.large;
    } else if (remainingCeramics - ceramicSizes.medium >= 0) {
      ceramicContainers.medium++;
      remainingCeramics = remainingCeramics - ceramicSizes.medium;
    } else {
      ceramicContainers.small++;
      remainingCeramics = remainingCeramics - ceramicSizes.small;
    }
  }
  return { metalContainers, ceramicContainers };
}
export interface Containers {
  small: number;
  medium: number;
  large: number;
  extraLarge: number;
  extraLarge1: number;
  extraLarge2: number;
  extraLarge3: number;
}

export const metalSizes = {
  small: 50,
  medium: 100,
  large: 200,
  extraLarge: 400,
  extraLarge1: 600,
  extraLarge2: 800,
  extraLarge3: 1000,
};

export const ceramicSizes = {
  small: 40,
  medium: 80,
  large: 160,
  extraLarge: 320,
  extraLarge1: 480,
  extraLarge2: 640,
  extraLarge3: 800,
};
