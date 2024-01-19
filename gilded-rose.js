import { Basic } from "/modules/basic.js";
import { BrieCheese } from "/modules/brieCheese.js";
import { Sulfuras } from "/modules/sulfuras.js";
import { Backstage } from "/modules/backstage.js";
import { Conjured } from "/modules/conjured.js";

export let items = [];

items.push(new BrieCheese("Aged Brie", 2, 0));
items.push(new Basic("Elixir of the Mongoose", 5, 7));
items.push(new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Backstage("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    item.updateValues();
  }
}
