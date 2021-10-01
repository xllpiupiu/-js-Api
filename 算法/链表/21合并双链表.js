/**
 * 合并双链表使之任然为升序链表
 */
 var mergeTwoLists = function(l1, l2) {
    if(l1===null) return l2;
    if(l2===null) return l1;
    if(l1.val<=l2.val) {
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1,l2.next);
        return l2;
    }
};
/**
 * 重新创建一个链表
 */
 var mergeTwoLists = function(l1, l2) {
    if(l1===null) return l2;
    if(l2===null) return l1;
    let curL1 = l1;
    let curL2 = l2;
    let head = new ListNode(0);
    let cur = head;
    while(curL1!==null&&curL2!==null) {
        if(curL1.val<=curL2.val) {
            cur.next = curL1;
            curL1 = curL1.next;
        } else {
            cur.next = curL2;
            curL2 = curL2.next;
        }
        cur = cur.next;
    }
    cur.next = curL1===null?curL2:curL1;
    return head.next;
};