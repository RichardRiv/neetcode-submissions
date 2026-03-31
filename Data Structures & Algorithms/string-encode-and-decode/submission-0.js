class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for(let str of strs){
            res = res + str.length + "#" + str;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let j = 0;
        let len = 0;
        let arr = [];

        while(i < str.length){
            if(str[j] === "#"){
                len = parseInt(str.substring(i,j));
                i = j+1;
                j = i+len;
                arr.push(str.substring(i,j));
                i = j;
            }
            j++;
        }

        return arr;
    }
}
