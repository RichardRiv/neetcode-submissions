class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(nums) {
        let maxContainer = 0;
        let length = 0, height = 0;
        let area = 0;
        let x = 0, y = nums.length - 1;
        
        while(x < y){
          height = Math.min(nums[x], nums[y]);
          length = y - x;
          area = height * length;
          maxContainer = Math.max(maxContainer, area);
          
          if(nums[x] < nums[y]){
            x++;
          }else{
            y--;
          }
        }
        return maxContainer;
    }
}