class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let zero = 0;
        let one = 0;
        let temp = 0;

        for(let two = 0; two < nums.length; two++){
            temp = nums[two];
            nums[two] = 2;
            
            if(temp < 2){
                nums[one++] = 1;
            }
            if(temp < 1){
                nums[zero++] = 0;
            }
        }
    }
}
