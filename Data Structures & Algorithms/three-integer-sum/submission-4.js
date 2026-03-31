class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
      let arr = [];
      nums.sort((a,b) => a - b);
      
      for(let x = 0; x < nums.length; x++){
        if(nums[x] === nums[x-1]) continue;
        let y = x+1;
        let z = nums.length - 1;
        
        while(y < z){
          let sum = nums[x] + nums[y] + nums[z];
          if(sum === 0){
            arr.push([nums[x], nums[y], nums[z]]);
            while(y < z && nums[y] === nums[y+1]) y++;
            while(y < z && nums[z] === nums[z-1]) z--;
            y++;
            z--;
          } else if(sum < 0){
            y++;
          } else{
            z--;
          }
        }
      }
      return arr;
    }
}