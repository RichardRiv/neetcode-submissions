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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode();
        let pt = dummy;
        let curr1 = list1, curr2 = list2;
        
        while(curr1 && curr2){
            if(curr1.val <= curr2.val){
                pt.next = curr1;
                curr1 = curr1.next;
            } else{
                pt.next = curr2;
                curr2 = curr2.next;
            }

            pt = pt.next;
        }

        pt.next = curr1 ?? curr2;
        return dummy.next;
    }
}
