class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1;
        let count = 0;
        let arr = [];

        while(count < nums.length){
            for(let i = 0; i < nums.length; i++){
              if(i == count) {
                continue;
              } else{
                prod = prod * nums[i];
              }
            }
            arr.push(prod);
            count++;
            prod = 1;
        }
      
        return arr;
    }
}
