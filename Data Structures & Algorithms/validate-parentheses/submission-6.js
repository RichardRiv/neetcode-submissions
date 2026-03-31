class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let obj = {
            '(': ')',
            '[': ']',
            '{': '}'
        }
        let stack = [];

        for(let ch of s){
            if(ch in obj){
                stack.push(ch);
            }else{
                if(ch === obj[stack[stack.length - 1]]) {
                    stack.pop();
                }else{
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
