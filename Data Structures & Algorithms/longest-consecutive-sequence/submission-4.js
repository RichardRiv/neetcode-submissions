class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      let currStreak = 1;
      let highestStreak = 0;
      let set = new Set(nums);
      
      for(let num of set){
        if(set.has(num - 1)) continue;
        
        while(set.has(num + currStreak)) currStreak++;
        highestStreak = Math.max(highestStreak, currStreak);
        currStreak = 1;
      }
      
      return highestStreak;
    }
}