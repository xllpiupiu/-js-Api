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
 var minDepth = function (root) {
    let queue = [];
    if (root === null) return [];
    queue.push(root);
    let treeRes = 1;
    while (queue.length) {
        let levelLength = queue.length;
        let curLevel = [];
        while (levelLength--) {
            let node = queue.shift();
            curLevel.push(node.val);
            if(node.left===null&&node.right===null) {
                return treeRes;
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        treeRes++;
    }
    return treeRes;
};
//递归找二叉树最小深度
/**
 * 递归法
 * 后序遍历
 * 根节点到第一个叶子节点的深度是最小深度
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function (root) {
    //后序遍历
    const getDepth = function (root) {
        if (root === null) return 0;
        //单层处理逻辑
        let leftDepth = getDepth(root.left);//左
        let rightDepth = getDepth(root.right);//右
        //中
        if (root.left === null && root.right !== null) {
            return 1 + rightDepth;
        }
        if (root.left !== null && root.right === null) {
            return 1 + leftDepth;
        }
        return 1 + Math.min(leftDepth, rightDepth);
    }
    return getDepth(root);
};