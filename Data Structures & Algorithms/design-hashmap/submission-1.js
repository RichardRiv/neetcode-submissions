class Node {
  constructor(key, value, next = null){
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class MyHashMap {
    constructor() {
      this.arr = Array.from({length:10000}, () => new Node(-1, -1))
    }
  
    hash(key){
      return key % this.arr.length;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
      let arr = this.arr[this.hash(key)];
      
      // while(arr.next){
        
      //   arr = arr.next;
      // }
      
      arr.next = new Node(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
      let arr = this.arr[this.hash(key)];
      
      while(arr.next){
        if(arr.next.key === key){
          return arr.next.value;
        } else{
          arr = arr.next;
        }
      }
      
      return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
      let arr = this.arr[this.hash(key)];
      
      while(arr.next){
        if(arr.next.key === key){
          arr.next = arr.next.next;
        }
      }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
