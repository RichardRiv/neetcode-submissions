class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
      let map = new Map();
      let x = 0;
      let maxFreq = 0;
      let res = 0;
      
      for(let y = 0; y < s.length; y++){
        let rightCh = s[y];
        map.set(rightCh, (map.get(rightCh) || 0) + 1);
        
        maxFreq = Math.max(maxFreq, map.get(rightCh));
        let winSize = (y-x) + 1;
        let chToReplace = winSize - maxFreq;
        
        if(chToReplace > k){
          let leftCh = s[x];
          map.set(leftCh, map.get(leftCh) - 1);
          x++;
        }
        
        res = Math.max(res, (y-x) + 1);
      }
      
      return res;
    }
}