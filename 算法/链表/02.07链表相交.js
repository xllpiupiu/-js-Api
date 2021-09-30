// 02.07 https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/solution/0207lian-biao-xiang-jiao-by-avvesome-sat-fpy1/
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function (headA, headB) {
    let dummyNodeA = new ListNode('A', headA);
    let dummyNodeB = new ListNode('B', headB);
    let curA = dummyNodeA;
    let curB = dummyNodeB;
    while (curA !== curB) {
        curA = curA === null ? dummyNodeB : curA.next;
        curB = curB === null ? dummyNodeA : curB.next;
    }
    return curA;
};