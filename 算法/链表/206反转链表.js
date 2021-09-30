//206 反转链表 地址：https://leetcode-cn.com/problems/reverse-linked-list/solution/206fan-zhuan-lian-biao-by-avvesome-satos-ejjf/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
//双指针
let pre=null;
let cur=head;
let temp;
while(cur){
    temp=cur.next;
    cur.next=pre;
    pre=cur;
    cur=temp;
}
return pre;
};
/**
 * 2. 递归方法
 */
 var reverseList = function (head) {
    const rever = function(pre,cur) {
        if(cur===null) {
            return pre;
        }
        let temp = cur.next;
        cur.next = pre;
        return rever(cur,temp);
    }
    return rever(null,head);
};