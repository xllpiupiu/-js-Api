//101 判断对称二叉树
/**
 * 1. 递归判断二叉树是否对称
 */
 var isSymmetric = function (root) {
    //1. 递归方法
    const dfsTree = function (left, right) {
        //2. 终止条件
        if (left === null && right === null) {
            return true;
        } else if ((left !== null && right === null) || (right !== null && left === null)) {
            return false;
        } else if (left.val !== right.val) {
            return false;
        }
        let outside = dfsTree(left.left, right.right);
        let inside = dfsTree(left.right, right.left);
        return outside && inside;
    }
  return  dfsTree(root.left,root.right);
};