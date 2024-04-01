/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy head to simplify edge cases
    let current = dummyHead; // Current node in the new list
    let carry = 0; // Carry from the previous addition
    let p = l1, q = l2; // Iterators for l1 and l2
    
    while (p != null || q != null) { // Continue until both lists are fully traversed
        let x = (p != null) ? p.val : 0; // Value of current node in l1, or 0 if p is null
        let y = (q != null) ? q.val : 0; // Value of current node in l2, or 0 if q is null
        let sum = carry + x + y; // Total sum including carry
        carry = Math.floor(sum / 10); // Update carry for next iteration
        current.next = new ListNode(sum % 10); // Create a new node with the digit part of sum
        current = current.next; // Move to the next node in the result list
        
        if (p != null) p = p.next; // Move to the next node in l1, if possible
        if (q != null) q = q.next; // Move to the next node in l2, if possible
    }
    
    if (carry > 0) { // If there's a remaining carry, add a new node with its value
        current.next = new ListNode(carry);
    }
    
    return dummyHead.next; // Return the next node of dummyHead, which is the actual start of the result list
};
