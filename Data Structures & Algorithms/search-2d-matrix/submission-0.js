class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
      for(let i = 0; i < matrix.length; i++){
        let l = 0;
        let r = matrix[i].length - 1;
        
        while(l <= r){
          let m = Math.floor((l+r) / 2);
          console.log(matrix[i][l], matrix[i][m], matrix[i][r]);
          if(matrix[i][m] === target) return true;
          if(matrix[i][m] < target) l = m+1;
          if(matrix[i][m] > target) r = m-1;
        }
      }
      
      return false;
    }
}