class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        strs.sort();
        console.log(strs);
        let firstWord = strs[0];
        let lastWord = strs[strs.length - 1];

        if(firstWord === lastWord) return firstWord;

        let i = 0;

        for(let j = 0; j <= firstWord.length; j++){
            if(firstWord[i] !== lastWord[j]) return firstWord.slice(0,i);
            i++;
        }

        return "";
    }
}
