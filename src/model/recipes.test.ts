import { describe, expect, it } from '@jest/globals';
import { Recipes } from './recipes';

describe('Recipes', () => {
  it('constructor should convert rows to Recipe object', () => {
    const data = [['Pfannkuchentorte', '-', '-', 100, 'Mehl', 2, 'Ei', '', '']];

    const actual = new Recipes(data);

    const expected = new Map([
      ['Mehl', 100],
      ['Ei', 2],
    ]);
    expect(actual.getRecipe('Pfannkuchentorte').ingredients).toEqual(expected);
  });

  it('constructor should store links', () => {
    const data = [['Pfannkuchentorte', 'www.pfannkuche.de']];

    const actual = new Recipes(data);

    const expected = new Map([
      ['Mehl', 100],
      ['Ei', 2],
    ]);
    expect(actual.getLink('Pfannkuchentorte')).toEqual('www.pfannkuche.de');
  });
});