class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        return Math.min(...nums.sort((a,b) => a-b));

    }
}
