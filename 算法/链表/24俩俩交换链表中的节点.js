//24 地址：
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var swapPairs = function (head) {
    //
    let dummyNode = new ListNode(0, head);
    let cur = dummyNode;
    while (cur.next !== null && cur.next.next !== null){
        //记录需要用到的节点
        let temp1 = cur.next;
        let temp2 = cur.next.next.next;
        cur.next = cur.next.next;
        cur.next.next = temp1;
        cur.next.next.next = temp2;
        cur = cur.next.next;
    }
    return dummyNode.next;
};