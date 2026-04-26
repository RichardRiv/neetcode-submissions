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
    goodNodes(root) {
        if(!root) return 0;

        let count = 0;
        const traverse = (node, max) => {
            if(!node) return null;
            
            if(node.val >= max) {
                count++;
                max = Math.max(max, node.val);
            }

            if(node.left) traverse(node.left, max);
            if(node.right) traverse(node.right, max);
        }

        traverse(root, -Infinity);
        return count;
    }
}
