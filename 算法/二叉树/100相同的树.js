//101 相同的树
// 递归
var isSameTree = function (p, q) {
    //使用递归
    const dfsTree = function (left, right) {
        if (left === null && right === null) {
            return true;
        } else if (left === null || right === null || (left.val !== right.val)) {
            return false;
        } 
        return dfsTree(left.left, right.left) && dfsTree(left.right, right.right);
    }
    return dfsTree(p, q);
};

/**
 * 2. 迭代方法
 */
 var isSameTree = function (p, q) {
    //迭代
    let queue = [];
    queue.push(p);
    queue.push(q);
    while(queue.length) {
        let pNode = queue.shift();
        let qNode = queue.shift();
        if(pNode===null&&qNode===null) {
            return true;
        }
        if(pNode===null||qNode===null||pNode.val!==qNode.val) {
            return false;
        }
        queue.push(p.left);
        queue.push(q.left);
        queue.push(p.right);
        queue.push(p.right);
    }
    return true;
};