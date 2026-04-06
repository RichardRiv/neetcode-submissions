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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(!head.next) return null;

        let node = head;
        let arr = [];

        while(node){
            arr.push(node);
            node = node.next;
        }

        if(arr.length === n) return arr[0].next;
        
        for(let i = 0; i <= arr.length - n; i++){
            if(i === arr.length - n){
                arr[i-1].next = arr[i].next;
            }
        }

        return head;
    }
}
