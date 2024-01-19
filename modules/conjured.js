import { Item } from "/modules/items.js";

export class Conjured extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }
  updateValues() {
    this.sellIn--;
    this.quality-=2;
  }
}