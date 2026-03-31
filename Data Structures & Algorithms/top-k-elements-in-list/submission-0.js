class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let value = 0;

        for(let i = 0; i < nums.length; i++){
        if(!map.get(nums[i])){
            map.set(nums[i], 1);
        } else{
            value = map.get(nums[i]);    
            map.set(nums[i], value + 1);
        }
        }

        let arr = [...map];
        arr.sort((a,b) => b[1] - a[1]);

        let count = 0;
        let res = [];

        for(let [key, value] of arr){
            if(count === k) break;
            res.push(key);
            count++;
        }

        return res;
    }
}
