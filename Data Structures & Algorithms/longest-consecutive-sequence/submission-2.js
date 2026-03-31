class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      let set = new Set(nums);
      let streak = 0;
      let longestStreak = 0;
      
      for(let num of set){
        if(!set.has(num - 1)){
          while(set.has(num + longestStreak)) longestStreak++;
          streak = Math.max(streak, longestStreak);
          longestStreak = 0;
        }
      }
      
      return streak;
    }
}