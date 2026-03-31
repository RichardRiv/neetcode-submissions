class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
      let l = 0, r = nums.length - 1;
      let m = 0;

      while(l <= r){
        m = Math.floor((l+r) / 2);
        
        if(nums[l] < nums[r] && nums[l] < nums[m]){
          r = m-1;
        } else if(nums[r] < nums[l] && nums[r] < nums[m]){
          l = m+1;
        } else{
          l++;
          r--;
        }
      }
      
      return nums[m];
    }
}
