class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 0) return 0;
        let set = new Set();
        let maxSub = 1;
        
        for(let x = 0; x < s.length; x++){
            for(let y = x; y < s.length; y++){
                if(!set.has(s[y])){
                    set.add(s[y]);
                }else{
                    maxSub = Math.max(maxSub, set.size);
                    set.clear();
                    break;
                }
            }
        }
        
        return maxSub;
    }
}