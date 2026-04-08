class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.map = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)) return -1;
        
        let value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return this.map.get(key);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
          this.map.delete(key);
        } else if(this.map.size === this.capacity) {
          this.map.delete(this.map.keys().next().value);
        };
        this.map.set(key, value);
    }
}