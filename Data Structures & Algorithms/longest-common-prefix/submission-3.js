class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        strs.sort();

        let start = strs[0];
        let end = strs[strs.length - 1];
        let res = "";      

        for(let i = 0; i < start.length; i++){
            if(start[i] !== end[i]) break;
            res += start[i];
        }

        return res;
    }
}
