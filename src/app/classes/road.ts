import { Containers, convertToCargo } from "./interfaces";

export class Road {
  public totalCrystals: number;
  public currentCrystals: number;

  public totalCeramics: number;
  public currentCeramics: number;
  public totalMetals: number;
  public currentMetals: number;
  public requiredCrystals: number;
  public requiredMetals: number;
  public requiredCeramics: number;
  public name: string;
  public metalContainers: Containers = {
    small: 0,
    medium: 0,
    large: 0,
    extraLarge: 0,
    extraLarge1: 0,
    extraLarge2: 0,
    extraLarge3: 0,
  };
  public ceramicContainers: Containers = {
    small: 0,
    medium: 0,
    large: 0,
    extraLarge: 0,
    extraLarge1: 0,
    extraLarge2: 0,
    extraLarge3: 0,
  };

  constructor(
    totalCrystals: number,
    currentCrystals: number,
    totalCeramics: number,
    currentCeramics: number,
    totalMetals: number,
    currentMetals: number,
    name: string
  ) {
    this.totalCrystals = totalCrystals;
    this.totalMetals = totalMetals;
    this.totalCeramics = totalCeramics;
    this.currentCrystals = currentCrystals;
    this.currentMetals = currentMetals;
    this.currentCeramics = currentCeramics;
    this.requiredCrystals = totalCrystals - currentCrystals;
    this.requiredMetals = totalMetals - currentMetals;
    this.requiredCeramics = totalCeramics - currentCeramics;
    this.name = name;
    this.generateContainers();
  }
  private generateContainers() {
    const { metalContainers, ceramicContainers } = convertToCargo(this);
    this.metalContainers = metalContainers;
    this.ceramicContainers = ceramicContainers;
  }
}
