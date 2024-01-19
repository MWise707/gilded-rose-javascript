import { Item } from "/modules/items.js";

export class BrieCheese extends Item {

  constructor (name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateValues() {
    this.sellIn--;
    this.quality++;
    if(this.quality >= 50) this.quality = 50;
  }
}