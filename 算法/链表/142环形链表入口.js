//142 环形链表入口 地址：https://leetcode-cn.com/problems/linked-list-cycle-ii/
var detectCycle = function(head) {
    //快慢指针
    let slow = head, fast = head;
    while(fast!==null&&fast.next!==null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            let index1 = fast;
            let index2 = head;
            while(index1!==index2) {
                index1 = index1.next;
                index2 = index2.next;
            }
            return index1;
        }
    }
    return null;
};