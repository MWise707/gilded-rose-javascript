import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

describe("updateQuality", () => {
  it("degrades the value of quality twice as fast when sellIn < 0", () => {
    const testItem = new Item("basic", -1, 4);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(-2);
  });
});

describe("updateQuality", () => {
  it("quality never increases above 50", () => {
    const testItem = new Item("Aged Brie", 3, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(2);
  });
});

describe("updateQuality", () => {
  it("Aged Brie increases quality as sellIn decreases", () => {
    const testItem = new Item("Aged Brie", 3, 30);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(31);
    expect(testItem.sellIn).toBe(2);
  });
});

describe("updateQuality", () => {
  it("Quality never less than zero", () => {
    const testItem = new Item("basic", -4, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-5);
  });
});

/*
describe("updateQuality", () => {
  it("Conjured items degrade quality by 2 everyday", () => {
    const testItem = new Item("Conjured Mana Cake", 3, 6);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(4);
    expect(testItem.sellIn).toBe(2);
  });
}); 
*/

