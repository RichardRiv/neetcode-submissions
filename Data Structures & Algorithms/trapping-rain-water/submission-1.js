class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(nums) {
      let leftWall = 0, rightWall = 0;
      let l = 0, r = nums.length - 1;
      let sum = 0;
      
      while(l < r){
        if(nums[l] < nums[r]){
          leftWall = Math.max(leftWall, nums[l]);
          sum += leftWall - nums[l]
          l++;
        } else{
          rightWall = Math.max(rightWall, nums[r]);
          sum += rightWall - nums[r];
          r--
        }
      }
      
      return sum;
    }
}