/**
 * 1. 递归翻转
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function (root) {
    //使用递归
    const swapNode = function (root,left, right) {
        let temp = left;
        left = right;
        right = temp;
        root.left = left;
        root.right = right;
    }
    // 1. 确定函数参数
    const invertTreeDfs = function (root) {
        //2. 确定递归终止条件
        if (root === null) return null;
        //3. 确定单层逻辑
        swapNode(root,root.left, root.right);
        invertTreeDfs(root.left);
        invertTreeDfs(root.right);
        return root;
    }
    invertTreeDfs(root)
    return root;
};
/**
 * 2. 迭代的方法
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function (root) {
    //使用迭代
    const swapNode = function (root,left, right) {
        let temp = left;
        left = right;
        right = temp;
        root.left = left;
        root.right = right;
    }
    let stack = [];
    if(root===null) return root;
    stack.push(root);
    while(stack.length) {
        let node = stack.pop();
        if(node!==null) {
            //前序遍历 中左右 入栈顺序右左中
            node.right&&stack.push(node.right);
            node.left&&stack.push(node.left);
            stack.push(node);
            stack.push(null);
        } else {
            node = stack.pop();
            swapNode(node,node.left,node.right);
        }
    }
    return root;
};
/**
 * 3. 层序遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function (root) {
    //使用迭代
    const swapNode = function (root,left, right) {
        let temp = left;
        left = right;
        right = temp;
        root.left = left;
        root.right = right;
    }
    let queue = [];
    if(root===null) return root;
    queue.push(root);
    while(queue.length) {
        let length = queue.length;
        let curLevel = [];
        for(let i =0;i<length;i++) {
            let node = queue.shift();
            swapNode(node,node.left,node.right);
            node.left&&queue.push(node.left);
            node.right&&queue.push(node.right);
        }
    }
    return root;
};