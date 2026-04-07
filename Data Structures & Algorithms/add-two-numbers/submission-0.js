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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let dummypt = dummy;
        let head1 = l1, head2 = l2;
        let carry = 0;

        while(head1 || head2 || carry){
            let val1 = head1 ? head1.val : 0;
            let val2 = head2 ? head2.val : 0;

            let sum = val1 + val2 + carry;
            dummypt.next = new ListNode(sum % 10);

            carry = Math.floor(sum / 10);

            if(head1) head1 = head1.next;
            if(head2) head2 = head2.next;
            dummypt = dummypt.next;
        }

        return dummy.next;
    }
}
