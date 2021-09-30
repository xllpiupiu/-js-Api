//110 平衡二叉树
/**
 * 使用递归
 * 后序遍历
 * @param {} root 
 * @returns 
 */
var isBalanced = function (root) {
    //使用后序遍历
    const getDeff = function (root) {
        if (root === null) return 0;
        let leftDepth = getDeff(root.left);
        if (leftDepth === -1) {
            return -1;
        }
        let rightDepth = getDeff(root.right);
        if (rightDepth === -1) {
            return -1;
        }
        if (Math.abs(leftDepth - rightDepth) > 1) {
            return -1;
        }
        return 1 + Math.max(leftDepth, rightDepth);
    }
    return getDeff(root) === -1?false:true;
};