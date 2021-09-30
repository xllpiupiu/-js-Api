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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function (root, subRoot) {
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
    if (root === null) return false;
    if (isSameTree(root, subRoot)) {
        return true;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
