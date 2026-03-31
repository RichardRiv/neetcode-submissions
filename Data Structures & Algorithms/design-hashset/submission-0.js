class Node {
    constructor(key, next = null){
        this.key = key;
        this.next = next;
    }
}

class MyHashSet {
    constructor() {
        this.arr = Array.from({length:10000}, () => new Node(0));
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let value = this.hash(key);
        let curr = this.arr[value];

        while(curr.next){
            if(curr.next.key === value) return;
            curr = curr.next;
        }

        curr.next = new Node(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let value = this.hash(key);
        let curr = this.arr[value];

        while(curr.next){
            if(curr.next.key === value){
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
            }
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let value = this.hash(key);
        let curr = this.arr[value];

        while(curr.next){
            if(curr.next.key === value){
                return true; 
            } else {
                curr = curr.next;
            }
        }

        return false;
    }

    hash(key){
        return key % this.arr.length;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
