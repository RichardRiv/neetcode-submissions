class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
      const rows = Array.from({length: 9}, () => new Set());
      const cols = Array.from({length: 9}, () => new Set())
      const boxes = Array.from({length: 9}, () => new Set())
      let boxIdx = 0;
      
      for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
          let value = board[i][j];
          if(value === '.') continue;
          boxIdx = Math.floor((i/3)) * 3 + Math.floor((j/3));
          
          if(rows[i].has(value) || cols[j].has(value) || boxes[boxIdx].has(value)){
            return false;
          } else{
            rows[i].add(value);
            cols[j].add(value);
            boxes[boxIdx].add(value);
          }
        }
      }
      return true;
    }
}