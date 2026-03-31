class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      let res = Array.from({length: nums.length}, () => 1);
      let len = res.length;
      
      for(let x = 1; x < len; x++){
        res[x] = nums[x-1] * res[x-1];
      }
      // nums = [2, 3, 4, 5]
      //  res = [1, 2, 6, 24] FINAL RES
      
      let prod = 1;
      for(let y = len - 1; y >= 0; y--){
        res[y] = res[y] * prod;
        prod = nums[y] * prod;
      }
      //nums = [2, 3, 4, 5]
      // res = [1, 2, 6, 24]
      // res = [60, 40, 30, 24]
      // res = [60, 40, 30, 24] // FINAL RES
      return res;
    }
}