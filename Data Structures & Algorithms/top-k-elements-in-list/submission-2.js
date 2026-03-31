class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let arr = Array.from({length: nums.length + 1}, () => []);
      let map = new Map();
      
      for(let num of nums){
        if(!map.has(num)){
          map.set(num, 1);
        } else{
          map.set(num, map.get(num) + 1);
        }
      }
      
      for(let [key, val] of map){
        arr[val].push(key);
      }
      
      let res = [];
      for(let i = arr.length - 1; i >= 0; i--){
        for(let j = 0; j < arr[i].length; j++){
          if(res.length < k) res.push(arr[i][j]);
        }
      }
      
      return res;
    }
}