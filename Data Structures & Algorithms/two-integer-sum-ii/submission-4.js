class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let map = new Map();
      for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(!map.has(diff)){
          map.set(nums[i], i);
        }else{
          return [map.get(diff)+1, i+1]
        }
      }
    }
}