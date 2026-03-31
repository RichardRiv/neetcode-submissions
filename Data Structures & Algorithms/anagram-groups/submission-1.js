class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let i = 0; i < strs.length; i++){
            let wrd = strs[i].split('').sort().join('');
            
            if(!map.has(wrd)){
                map.set(wrd, [strs[i]])
            } else{
                map.get(wrd).push(strs[i]);
            }
        }

        return [...map.values()];
    }
}
