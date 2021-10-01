/**
 * 实现双链表
 * 1. 双链表的查找功能 find
 * 2. 双链表的移除功能index  removeIdx
 * 3. 判断双链表是否为空  isEmpty
 * 4. 获取双链表长度  size
 * 5. 双链表中插入 insert 
 */
function ListNode(val, next, pre) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.pre = pre === undefined ? null : pre;
}
const doubleList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
}
doubleList.prototype.find = function (val) {
    let curNode = this.head
    if (curNode === null) return false
    while (curNode !== null) {
        if (curNode.val === val) return true;
        curNode = curNode.next;
    }
    return false;
}
doubleList.prototype.insert = function (index, val) {
    let newNode = new ListNode(val);
    if (index >= 0 && index <= this.length) {
        let pre = this.head
        let curNode = this.head
        let i = 0
        //总共分为index===0 index===this.length index>0&&index<this.length
        if (index === 0) {
            if (this.head === null) {
                this.head = newNode
                this.tail = newNode
            } else {
                newNode.next = this.head
                this.head.pre = newNode;
                this.head = newNode
            }
        } else if (index === this.length) {
            newNode.pre = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            while (i < index) {
                pre = curNode;
                curNode = curNode.next;
                i++;
            }
            pre.next = newNode;
            newNode.pre = pre;
            newNode.next = curNode;
            curNode.pre = newNode;
        }
        this.length++;
        return true;
    } else {
        return false;
    }
}


doubleList.prototype.removeIdx = function (index) {
    //还是分为三种情况index===0 index===this.length index在0-this.length之间
    if (index >= 0 && index < this.length && this.length > 0) {
        let pre = this.head;
        let curNode = this.head;
        let i = 0;
        if (index === 0) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.pre = null;
            }
        } else if (index === this.length - 1) {
            curNode = this.tail;
            this.tail = this.tail.pre;
            this.tail.next = null;
        } else {
            while (i < index) {
                pre = curNode;
                curNode = curNode.next;
                i++
            }
            pre.next = curNode.next;
            curNode.next.pre = pre;
        }
        this.length--;
        return curNode;
    } else {
        return null;
    }
}
doubleList.prototype.size = function() {
    return this.length;
}
doubleList.prototype.isEmpty = function() {
    if(this.length === 0) return true;
    return false
}
const list = new doubleList();
list.insert(0, 1);
list.insert(1, 2);

console.log('list: ', list);
console.log('find>>>', list.find(2))
console.log('removeIdx>>>',list.removeIdx(1))
console.log('list: ', list);
console.log('list: 长度', list.size());
console.log('list: 是否为空>>>',list.isEmpty())

