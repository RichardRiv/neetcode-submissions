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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(!root) return "";

        let queue = [root];
        let res = [];
        
        while(queue.length){
            let node = queue.shift();

            if(!node){
                res.push("null");
            } else{
                res.push(`${node.val}`);
                queue.push(node.left);
                queue.push(node.right);
            }
        }

        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(!data) return null;
        // "1,2,3,null,null,4,5,null,null,null,null"
        // ['1','2','3','null', 'null', '4','5','null', 'null','null', 'null']
        
        let arr = data.split(',');
        let root = new TreeNode(Number(arr[0]))
        let queue = [root];
        let i = 1;

        while(queue.length || i < arr.length){
            let node = queue.shift();

            if(arr[i] !== 'null'){
                node.left = new TreeNode(Number(arr[i]));
                queue.push(node.left);
            }
            i++;

            if(arr[i] !== 'null'){
                node.right = new TreeNode(Number(arr[i]));
                queue.push(node.right);
            }
            i++;
        }

        return root;
    }
}
