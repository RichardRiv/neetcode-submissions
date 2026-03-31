class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let l = 0;
      let r = nums.length - 1;
      let sum = 0;
      
      while(l < r){
        sum = nums[l] + nums[r];
        if(sum > target){
          r--;
        }else if(sum < target){
          l++;
        } else{
          return [l+1, r+1];
        }
      }
    }
}