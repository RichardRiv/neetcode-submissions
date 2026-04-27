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
        let stack = [root];
        let arr = [];

        while(stack.length){
            let node = stack.pop();
            arr.push(node.val);

            if(node.right) stack.push(node.right);
            if(node.left) stack.push(node.left);
        }

        arr.sort((a,b) => a-b);
        return arr[k-1];
    }
}
