import { expect, describe, it } from "vitest";
import { items, updateQuality } from "./gilded-rose.js";
import { Basic } from "/modules/basic.js";
import { BrieCheese } from "/modules/brieCheese.js";
import { Sulfuras } from "/modules/sulfuras.js";
import { Backstage } from "/modules/backstage.js";
import { Conjured } from "/modules/conjured.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Basic("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

describe("updateQuality", () => {
  it("degrades the value of quality twice as fast when sellIn < 0", () => {
    const testItem = new Basic("basic", -1, 4);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(-2);
  });
});

describe("updateQuality", () => {
  it("quality never increases above 50", () => {
    const testItem = new BrieCheese ("Aged Brie", 3, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(2);
  });
});

describe("updateQuality", () => {
  it("Aged Brie increases quality as sellIn decreases", () => {
    const testItem = new BrieCheese("Aged Brie", 3, 30);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(31);
    expect(testItem.sellIn).toBe(2);
  });
});

describe("updateQuality", () => {
  it("Quality never less than zero", () => {
    const testItem = new Basic ("basic", -4, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-5);
  });
});

describe("updateQuality", () => {
  it("Sulfuras, Hand of Ragnaros - quality and sellIn don't change", () => {
    const testItem = new Sulfuras ("Sulfuras, Hand of Ragnaros", 25, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(25);
  });
});



describe("updateQuality", () => {
  it("Backstage passes increase quality by 2 when sellIn between 10 & 6", () => {
    const testItem = new Backstage("Backstage passes to a TAFKAL80ETC concert", 7, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(22);
    expect(testItem.sellIn).toBe(6);
  });
});

describe("updateQuality", () => {
  it("Backstage passes quality = 0 after concert", () => {
    const testItem = new Backstage("Backstage passes to a TAFKAL80ETC concert", 0, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-1);
  });
});

describe("updateQuality", () => {
  it("Backstage passes increase quality by 2 when sellIn between 5 & 1", () => {
    const testItem = new Backstage("Backstage passes to a TAFKAL80ETC concert", 3, 27);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(30);
    expect(testItem.sellIn).toBe(2);
  });
});

describe("updateQuality", () => {
  it("Conjured items degrade quality by 2 everyday", () => {
    const testItem = new Conjured("Conjured Mana Cake", 3, 6);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(4);
    expect(testItem.sellIn).toBe(2);
  });
}); 