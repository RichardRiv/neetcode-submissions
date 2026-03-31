class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(let str of strs){
            res += str.length + "#" + str;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      let res = [];
      let i = 0, j = 0;
      
      while(i < str.length){
        while(str[j] !== "#") j++;
        let len = parseInt(str.substring(i, j));
        i = j+1;
        j = i;
        j = j+len;
        res.push(str.substring(i,j));
        i = j;
      }
      
      return res;
    }
}