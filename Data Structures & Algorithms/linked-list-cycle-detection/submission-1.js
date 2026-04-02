/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let set = new Set();
        let node = head;
        // console.log(head.next);

        while(node){
            if(!set.has(node.val)){
                set.add(node.val);
            }else{
                if(node.next){
                    return true;
                }else{
                    return false;
                }
            }

            node = node.next;
        }

        return false
    }
}
