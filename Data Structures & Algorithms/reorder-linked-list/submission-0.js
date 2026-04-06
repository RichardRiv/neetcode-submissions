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
     * @return {void}
     */
    reorderList(head) {
        let fast = head;
        let slow = head;

        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }

        let secondHalf = slow.next;
        slow.next = null;

        let secNode = secondHalf;
        let prev = null;
        while(secNode){
            let next = secNode.next;
            secNode.next = prev;
            prev = secNode;
            secNode = next;
        }

        let firstNode = head;
        while(prev){
            let tmpFNext = firstNode.next;
            let tmpSNext = prev.next;
            firstNode.next = prev;
            prev.next = tmpFNext;
            firstNode = tmpFNext;
            prev = tmpSNext;
        }
    }
}
