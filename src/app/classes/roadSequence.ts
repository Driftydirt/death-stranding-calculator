import { Containers } from "./interfaces";
import { Road } from "./road";

export class RoadSequence {
  public roads: Road[];
  public name: string;
  public roadSequenceMetalContainers: Containers[] = [];
  public roadSequenceCeramicContainers: Containers[] = [];
  public roadSequenceCrystals: number[] = [];

  constructor(roads: Road[], name: string) {
    this.roads = [];
    this.addRoadsRecalc(roads);
    this.name = name;
  }

  public addRoadsRecalc(roads: Road[]) {
    this.roadSequenceCeramicContainers = [];
    this.roadSequenceMetalContainers = [];
    this.roadSequenceCrystals = [];
    this.roads = [];

    roads.forEach((road) => {
      this.addRoad(road);
    });
  }

  public addRoad(road: Road) {
    this.roads.push(road);
    const metalContainers = this.roadSequenceMetalContainers;
    const ceramicContainers = this.roadSequenceCeramicContainers;
    const crystals = this.roadSequenceCrystals;

    if (metalContainers.length === 0) {
      metalContainers.push(road.metalContainers);
    } else
      metalContainers.push(
        this.combineShipment(
          metalContainers[metalContainers.length - 1],
          road.metalContainers
        )
      );

    if (ceramicContainers.length === 0) {
      ceramicContainers.push(road.ceramicContainers);
    } else
      ceramicContainers.push(
        this.combineShipment(
          ceramicContainers[ceramicContainers.length - 1],
          road.metalContainers
        )
      );

    if (crystals.length === 0) {
      this.roadSequenceCrystals.push(road.requiredCrystals);
    } else {
      this.roadSequenceCrystals.push(
        crystals[crystals.length - 1] + road.requiredCrystals
      );
    }
    this.roadSequenceMetalContainers = metalContainers;
    this.roadSequenceCeramicContainers = ceramicContainers;
  }

  // private calculateRoadSequence(road: Road) {
  //   const metalContainers = this.roadSequenceMetalContainers;
  //   const ceramicContainers = this.roadSequenceCeramicContainers;
  //   const crystals = this.roadSequenceCrystals;
  //   let currentMetals: Containers = [];
  //   let currentCeramic: Containers = [];

  //   if (metalContainers.length === 0) {
  //     currentMetals = this.combineShipment(
  //       metalContainers[metalContainers.length - 1],
  //       road.metalContainers
  //     );
  //   }

  //   if (ceramicContainers.length != 0) {
  //     currentCeramics = this.combineShipment(
  //       ceramicContainers[ceramicContainers.length - 1],
  //       road.metalContainers
  //     );
  //   }

  //   if (crystals.length != 0) {
  //     const currentCrystals =
  //       crystals[crystals.length - 1] + road.requiredCrystals;
  //   }
  //   return { currentMetals, currentCeramics, crystals };
  // }

  private combineShipment(ship1: Containers, ship2: Containers): Containers {
    const newContainers: Containers = {
      small: ship1.small + ship2.small,
      medium: ship1.medium + ship2.medium,
      large: ship1.large + ship2.large,
      extraLarge: ship1.extraLarge + ship2.extraLarge,
      extraLarge1: ship1.extraLarge1 + ship2.extraLarge1,
      extraLarge2: ship1.extraLarge2 + ship2.extraLarge2,
      extraLarge3: ship1.extraLarge3 + ship2.extraLarge3,
    };
    return newContainers;
  }
}
