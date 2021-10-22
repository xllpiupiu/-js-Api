/**
 * 闭包
 */
function fn(a) {
    const b = function (b) {
        return a + b
    }
    return b
}
/**
 * 2. 防抖
 */
function deb(delayTime, callback) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(callback, delayTime)
    }
}
/**
 * 3. 反转链表
 */
 class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const list = new ListNode(1)
list.next = new ListNode(3)
console.log('list: ', list);
const reverseList = function (head) {
    let pre = null
    let cur = head
    let temp
    while (cur) {
        temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre;
}
// console.log(reverseList(list))
const reverseList2 = function (cur, pre) {
    if (cur === null) return pre
    temp = cur.next
    cur.next = pre
    return reverseList2(temp, cur)
}
console.log(reverseList2(list,null))
/**
 * 变量提升
 */
// const a = 1
// f()
// console.log(a)
// function f() {
//     console.log(a)
//     const a = 2
//     console.log(a)
// }