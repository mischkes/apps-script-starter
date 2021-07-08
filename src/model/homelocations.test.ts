import { describe, expect, it, test } from '@jest/globals';
import { HomeLocations } from './homelocations';

describe('HomeLocations', () => {
  it('getSpacesAfter should return as defined in map', () => {
    const locations = HomeLocations.fromArray([
      ['product1', 2],
      ['product2', 3],
    ]);

    expect(locations.getSpacesAfter('product1')).toEqual(2);
    expect(locations.getSpacesAfter('product2')).toEqual(3);
  });

  it('getSpacesAfter should return 1 if not defined in map', () => {
    const locations = HomeLocations.fromArray([
      ['product1', 2]
    ]);

    expect(locations.getSpacesAfter('location notInMap')).toEqual(1);
  });

  //TODO: test getLocations
});
