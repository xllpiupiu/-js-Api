
//19 使用双指针的方法
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
    let dummyNode = new ListNode(0, head);
    let slow = dummyNode;
    let fast = dummyNode;
    while (n-- && fast !== null) {
        fast = fast.next;
    }
    fast = fast.next;
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummyNode.next;
};