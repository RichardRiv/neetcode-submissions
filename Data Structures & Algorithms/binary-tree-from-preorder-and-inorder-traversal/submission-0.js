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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let map = new Map();
        inorder.forEach((el, idx) => map.set(el, idx));

        let preIdx = 0;
        const dfs = (l,r) => {
            if(l > r) return null;

            let nodeVal = preorder[preIdx++];
            let node = new TreeNode(nodeVal);
            let midIdx = map.get(nodeVal);

            node.left = dfs(l, midIdx - 1);
            node.right = dfs(midIdx + 1, r);
            
            return node;
        }

        return dfs(0, preorder.length - 1);
    }
}
