import { Item } from "/modules/items.js";

export class Basic extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }
    updateValues() {
        (this.sellIn > 0 && this.quality > 0) ? this.quality-- : this.quality = this.quality -2;
        if(this.quality < 0) this.quality = 0;
        this.sellIn--; 
    }
}