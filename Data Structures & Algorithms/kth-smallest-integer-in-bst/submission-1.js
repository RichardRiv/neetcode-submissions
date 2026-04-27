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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let stack = [];
        let node = root;

        while(stack.length || node){
            while(node){
                stack.push(node);
                node = node.left;
            }

            node = stack.pop();
            if(--k === 0) return node.val;

            node = node.right;
        }
    }
}
