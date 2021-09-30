/**
 * Initialize your data structure here.
 */
 const ListNode = function (val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index >= 0 && index < this.length) {
        let i = 0;
        let curNode = this.head;
        while (i++ < index) {
            curNode = curNode.next;
        }
        return curNode.val;
    } else {
        return -1;
    }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    this.head = new ListNode(val, this.head);
    if (this.tail === null) {
        this.tail = this.head;
        this.tail.next = null;
    }
    this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const oldTail = this.tail;
    this.tail = new ListNode(val);
    if (oldTail) {
        oldTail.next = this.tail;
    }
    if (this.head === null) {
        this.head = this.tail;
    }
    this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index <= 0) {
        this.addAtHead(val);
    } else if (index === this.length) {
        this.addAtTail(val);
    } else if (index > 0 && index < this.length) {
        let i = 0;
        let cur = this.head;
        while (i++ < index - 1) {
            cur = cur.next;
        }
        cur.next = new ListNode(val, cur.next);
        this.length++;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index > 0 && index < this.length) {
        let i = 0;
        let curNode = this.head;
        while(i++<index-1) {
            curNode = curNode.next;
        }
        if(index===this.length-1) {
            curNode.next = null;
            this.tail = curNode;
        } else {
        curNode.next = curNode.next.next;
        }
        this.length--;
    } else if (index === 0) {
        this.head = this.head.next;
        this.length--;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */