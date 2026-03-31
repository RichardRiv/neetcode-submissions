class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        let diff = 0;

        for(let i = 0; i < nums.length; i++){
            diff = target - nums[i];

            if(map.has(diff) && i !== map.get(diff)) {
                return [map.get(diff), i];
            } else if(!map.has(nums[i])){
                map.set(nums[i], i);
            }
        }
    }
}
