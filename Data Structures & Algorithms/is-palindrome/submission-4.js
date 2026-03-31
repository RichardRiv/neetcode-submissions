class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let nonAlphaNum = /[^a-z0-9]/gm;
        s = s.toLowerCase().replace(nonAlphaNum, '');
        
        let left = 0, right = s.length - 1;
        
        while(left < right){
            if(s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
