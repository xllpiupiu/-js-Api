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
 var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    if(root==null) {
        return res
    }
    stack.push(root);
    while(stack.length!==0){
        //中序遍历 左中右 入栈顺序右中左
        let node = stack.pop();
        if(node!==null) {
            node.right&&stack.push(node.right);
            stack.push(node);
            stack.push(null);
            node.left&&stack.push(node.left);
        } else {
            let node = stack.pop();
            res.push(node.val);
        }
    }
    return res;
};