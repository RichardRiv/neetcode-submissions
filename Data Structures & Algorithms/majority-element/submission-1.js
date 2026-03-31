class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 1;
        let el = nums[0];

        for(let i = 1; i < nums.length; i++){
            let num = nums[i];

            if(num === el){
                count++;
            } else{
                count--;
            }

            if(count === 0){
                el = num;
                count = 1;
            }
        }

        return el;
    }
}
