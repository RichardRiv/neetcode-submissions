class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      s = s.split(' ').join('').toLowerCase();
      let l = 0;
      let r = s.length - 1;
      
      while(l < r){
        while(l < r && !this.isAlphaNum(s[l])) l++;
        while(l < r && !this.isAlphaNum(s[r])) r--;
        
        if(s[l] !== s[r]) return false;
        l++;
        r--;
      }
      return true;
    }
    
    isAlphaNum(ch){
      return (ch >= 'a' && ch <= 'z') ||
             (ch >= 0 && ch <= 9);
    }
}