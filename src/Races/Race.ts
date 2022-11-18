abstract class Race {
  constructor(
    readonly name: string,
    readonly dexterity: number,
  ) { }

  static createdRacesInstances(instances: number): number {
    console.log('O número de instâncias é:', instances);
    throw Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;