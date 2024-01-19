import { Item } from "/modules/items.js";

export class Backstage extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    updateValues() {
      this.sellIn--;
      this.quality++; // increase by 1
      
      if(this.sellIn <= 10 && this.sellIn >= 6) this.quality++;
      
      if(this.sellIn <= 5 && this.sellIn >= 1) this.quality+=2;
      
      if(this.sellIn === 0 || this.sellIn < 0) this.quality = 0;
      
    }
}