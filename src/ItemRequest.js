export class ItemRequest {

    /**
     * @param {string} item
     * @param {number} amountPerMinute
     */
    constructor(item, amountPerMinute) {
        this.item = item;
        this.amountPerMinute = amountPerMinute;
    }
}
