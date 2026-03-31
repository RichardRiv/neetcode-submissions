class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map();

        for(let num of nums){
            if(!map.has(num)) {
                map.set(num, 1);
            } else {
                map.set(num, map.get(num) + 1);
            }
        }

        let maxK = 0;
        let maxV = -Infinity;
        for(let [key, value] of map){
            if(value > maxV){
                maxV = value;
                maxK = key;
            }
        }
        
        return maxK;
    }
}
