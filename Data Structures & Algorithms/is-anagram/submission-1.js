class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let map = new Map();

        for(let i = 0; i < s.length; i++){
            if(!map.has(s[i])){
                map.set(s[i], 1);
            } else{
                map.set(s[i], map.get(s[i]) + 1);
            }
        }

        for(let num of t){
            if(map.has(num)){
                map.set(num, map.get(num) - 1);
            }
            if(map.get(num) < 0 || !map.has(num)) return false;
        }

        return true;
    }
}
