/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(!root) return 0;

        let stack = [[root, 1]]
        let res = 1;
        while(stack.length){
            let [node, depth] = stack.pop();
            
            if(node.left) stack.push([node.left, depth+1]);
            if(node.right) stack.push([node.right, depth+1]);
            res = Math.max(res, depth);
        }

        return res;
    } 
}