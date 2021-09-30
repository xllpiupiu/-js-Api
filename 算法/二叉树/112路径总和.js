//112 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function (root, targetSum) {
    //使用前序遍历
    const preDfs = function (root, count) {
        if (root.left === null && root.right === null && count === 0) {
            return true;
        }
        if (root.left === null && root.right === null) {
            return false;
        }
        if (root.left && preDfs(root.left, count - root.left.val)) {
            return true;
        }
        if (root.right && preDfs(root.right, count - root.right.val)) {
            return true;
        }
        return false;
    }
    if(root===null) return false;
    return preDfs(root, targetSum-root.val);
};
//112 路径总和
var hasPathSum = function (root, targetSum) {
    //使用前序遍历
    if (root === null) return false;
    if (root.left === null && root.right === null && targetSum === root.val) {
        return true;
    }
    return hasPathSum(root.left,targetSum-root.val) || hasPathSum(root.right,targetSum-root.val);
};