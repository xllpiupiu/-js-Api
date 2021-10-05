/**
 * 实现一个单链表  单链表我们现需要考虑以下一些功能
 * 1. 获取链表指定Index位置的节点 getList
 * 2. 在链表中查找给定的元素 find
 * 3. 向链表末尾追加元素 append
 * 4. 向链表指定位置插入元素 insert
 * 5. 链表移除最后一个元素 remove
 * 6. 判断链表是否为空  isEmpty
 * 7. 获取链表长度 size
 * 力扣有类似题 https://leetcode-cn.com/problems/design-linked-list/solution/707she-ji-lian-biao-geng-xin-by-avvesome-fg4b/
 */
//1. 实现列表节点的构造函数
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
const myLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
}
myLinkedList.prototype.get = function (index) {
    //1. 首先判断index是否在链表长度范围内 不在就返回-1
    if (index >= 0 && index < this.length) {
        let i = 0;
        let curNode = this.head;
        while (i++ < index) {
            curNode = curNode.next;
        }
        return curNode.val
    } else {
        return -1;
    }
}
myLinkedList.prototype.find = function (val) {
    let curNode = this.head;
    if (curNode === null) return false;
    while (curNode) {
        if (curNode.val === val) return true;
        curNode = curNode.next;
    }
    return false;
}
myLinkedList.prototype.append = function (val) {
    //追加节点的长度要增加1
    let appendNode = new ListNode(val);
    if (this.head === null) {
        this.head = appendNode;
    } else {
        let curNode = this.head;
        while(curNode.next) {
            curNode = curNode.next;
        }
        curNode.next = appendNode;
    }
    this.length++;
}
myLinkedList.prototype.insertIdx = function(index,val) {
    //考虑到插入位置有可能是0 用虚拟头节点
    let dummyNode = new ListNode(0,this.head);
    let insertNode = new ListNode(val);
    let curNode = dummyNode;
    let i = 0;
    if(index<0||index>this.length) return null
    //找到要插入的前一个节点  这里有虚拟节点所以是i++<index
    while(i++<index) {
        curNode = curNode.next;
    }
    let curNodenxt = curNode.next;
    curNode.next = insertNode;
    insertNode.next = curNodenxt;
    this.length++;
    this.head = dummyNode.next;
    return this.head;
}
myLinkedList.prototype.remove = function(val) {
    if(this.length===0) return null;
    //同样设置虚拟头节点 删除的是头节点方便处理
    let dummyNode = new ListNode(0,this.head);
    let pre = dummyNode;
    let curNode = this.head;
    while(curNode.val!==val&&curNode) {
        pre = curNode;
        curNode = curNode.next;
    }
    pre.next = curNode.next;
    this.head = dummyNode.next;
    this.length--;
}
myLinkedList.prototype.isEmpty = function() {
    if(this.length === 0) return true;
    return false;
}
myLinkedList.prototype.size = function() {
    return this.length;
}
//测试
const list = new myLinkedList();
list.append(3)
list.append(4);
console.log('list>>',list)
console.log('查找元素>>',list.find(3))
console.log('get>>>>',list.get(0))
list.insertIdx(0,5);
console.log('list>>',list)
list.remove(4)
console.log('removeList>>>>',list)
console.log('判断链表是否为空》》》',list.isEmpty())
console.log('获取链表长度>>>>',list.size())