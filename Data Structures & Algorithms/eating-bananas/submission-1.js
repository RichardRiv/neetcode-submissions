class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1, r = Math.max(...piles);
        let res = r;
      
        while(l <= r){
          let totalTime = 0;
          let mid = Math.floor((l+r) / 2);
          
          for(let num of piles){
            totalTime += Math.ceil(num/mid);      
          }
          
          if(totalTime <= h){
            res = mid;
            r = mid-1;
          } else{
            l = mid+1;
          }
        }
      
        return res;
    }
}

//  0, 2-0, 1-0, 0
// [1,   4,   3, 2]

//   0,  0,  0, 0
// [25, 10, 23, 4]

//12-0,  0, 10-0, 0
// [25, 10,   23, 4]
