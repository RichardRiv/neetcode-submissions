class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
      let l = 0, r = nums.length - 1;
      
      while(l < r){
        let m = Math.floor((l+r)/2);
        console.log(nums[l],nums[m],nums[r])
        if(nums[r] < nums[m]){
          l = m+1;
        }else{
          r = m;
        }
      }
      
      return nums[l]
    }
}