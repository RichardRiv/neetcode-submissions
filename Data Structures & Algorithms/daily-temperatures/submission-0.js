class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
      let res = [];
      
      for(let x = 0; x < temperatures.length; x++){
        for(let y = x+1; y < temperatures.length; y++){
          if(temperatures[y] > temperatures[x]){
            res.push(y-x);
            break;
          }
          else{
            if(y === temperatures.length - 1) res.push(0);
            continue;
          }
        }
      }
      
      res.push(0);
      return res;
    }
}