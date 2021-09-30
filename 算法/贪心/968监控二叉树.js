/**
 * 968 监控二叉树
 * https://leetcode-cn.com/problems/binary-tree-cameras/solution/968jian-kong-er-cha-shu-by-avvesome-sato-sy3u/
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
 * @return {number}
 */
 var minCameraCover = function (root) {
    //1. 1表示节点有摄像头  2表示节点有覆盖  0表示节点无覆盖
    let res = 0;
    const traversal = function (root) {
        if (root === null) return 2;
        const left = traversal(root.left);
        const right = traversal(root.right);
        if (left === 0 || right === 0) {
            res++;
            return 1;
        } else if (left === 1 || right === 1) {
            return 2;
        } else if (left === 2 && right === 2) {
            return 0;
        }
        return -1;
    }
    if (traversal(root) === 0) {
        res++;
    }
    return res;
};