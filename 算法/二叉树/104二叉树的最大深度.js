//104 二叉树的最大深度

/**
 * 前序遍历
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    //前序遍历
    let res = 0;
    if(root===null) return res;
    const getDepth = function(root,depth) {
        res = res > depth?res:depth;
        root.left&&getDepth(root.left,depth+1);
        root.right&&getDepth(root.right,depth+1);
    }
    getDepth(root,1);
    return res;
};
//后序遍历
var maxDepth = function (root) {
    //后序遍历
    const getDepth = function (root) {
        if (root === null) return 0;
        let leftDepth = getDepth(root.left);
        let rightDepth = getDepth(root.right);
        let depth = 1 + Math.max(leftDepth, rightDepth);
        return depth;
    }
    return getDepth(root);
};