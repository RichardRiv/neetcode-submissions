class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let orderedStrs = [];
        let map = new Map();
        
        for(let str of strs){
            orderedStrs.push(str.split('').sort().join(''));
        }

        for(let i = 0; i < orderedStrs.length; i++){
            if(!map.has(orderedStrs[i])){
                map.set(orderedStrs[i], [strs[i]]);
            } else{
                map.get(orderedStrs[i]).push(strs[i]);
            }
        }

        return Array.from(map.values());
    }
}
