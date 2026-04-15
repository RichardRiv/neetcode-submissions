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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return root;

        const traverse = (root) => {
            if(!root) return null;

            traverse(root.left);
            traverse(root.right);
            [root.left, root.right] = [root.right, root.left]; 
        }

        traverse(root);
        return root;
    }
}
