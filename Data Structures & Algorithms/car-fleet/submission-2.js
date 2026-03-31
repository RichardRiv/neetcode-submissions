class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
      let stack = [];
      let arr = position.map((p,i) => [p, (target - p) / speed[i]]);
      arr.sort((a,b) => b[0]-a[0]);
      
      for(let [pos,time] of arr){
        stack.push(time);
        
        if(stack.length > 1 && stack[stack.length-1] <= stack[stack.length-2]){
          stack.pop();
        }
      }
      
      return stack.length;
    }
}