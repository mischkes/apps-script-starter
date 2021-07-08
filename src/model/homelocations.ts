import { HomeLocation } from './homelocation';

export class HomeLocations {
  private readonly defaultLocation = new HomeLocation('default', 1);

  constructor(readonly locations: Map<string, HomeLocation>) {}

  getSpacesAfter(location: string): number {
    return (this.locations.get(location) || this.defaultLocation).spacesAfter;
  }

  locationKeys(): IterableIterator<string> {
    return this.locations.keys();
  }

  static fromArray(data: any[][]): HomeLocations {
    const locations = new Map(
      data
        .map((row) => new HomeLocation(row[0], row[1]))
        .filter((locationObj) => locationObj.location)
        .map((locationObj) => [locationObj.location, locationObj])
    );
    return new HomeLocations(locations);
  }
}

/*
{"config": {
  "homeLocationsRangeName": "cfgHomeLocatations_productsUpdateTest"
},
"location": "notExistingLocation"
}
 */
