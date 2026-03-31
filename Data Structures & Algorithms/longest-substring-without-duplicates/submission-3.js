class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
      let set = new Set();
      let maxSub = 0;
      let l = 0;
      
      for(let r = 0; r < s.length; r++){
        while(set.has(s[r])){
          set.delete(s[l]);
          l++;
        }
        maxSub = Math.max(maxSub, (r-l)+1);
        set.add(s[r]);
      }
      
      return maxSub;
    }
}