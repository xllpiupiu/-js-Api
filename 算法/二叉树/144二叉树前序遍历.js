var preorderTraversal = function(root) {
    const res = [];
    //1. 确定递归函数以及参数和返回值
    function dfs(root) {
        //2. 确定终止条件
        if(root===null) return ;
        //3. 单层递归逻辑
        res.push(root.val);
        dfs(root.left);
        dfs(root.right);
    };
    dfs(root);
    return res;
};
/**
 * 2. 二叉树前序遍历迭代方法
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
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    const res = [];
    const stack = [];
    if(root==null) {
        return res
    }
    stack.push(root);
    while(stack.length!==0){
        //前序遍历 中左右 入栈右左中
        let node = stack.pop();
        if(node!==null) {
            node.right&&stack.push(node.right);
            node.left&&stack.push(node.left);
            stack.push(node);
            stack.push(null);
        } else {
            let node = stack.pop();
            res.push(node.val);
        }
    }
    return res;
};