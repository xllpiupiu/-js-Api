//203 地址：https://leetcode-cn.com/problems/remove-linked-list-elements/solution/203-yi-chu-lian-biao-yuan-su-by-avvesome-emog/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    //首先设置虚拟的头节点
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let cur = dummyHead;
    while (cur.next !== null) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    head = dummyHead.next;
    return head;
};

    // 作者：avvesome-satoshinwt
    // 链接：https://leetcode-cn.com/problems/remove-linked-list-elements/solution/203-yi-chu-lian-biao-yuan-su-by-avvesome-emog/
    // 来源：力扣（LeetCode）
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。