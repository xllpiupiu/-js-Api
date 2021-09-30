//98 验证搜索二叉树
var isValidBST = function (root) {
    //使用递归方法
    let pre = null;
    const inDfs = function (root) {
        if (root === null) return true;
        let left = inDfs(root.left);
        if (pre !== null && pre.val >= root.val) return false;
        pre = root;
        let right = inDfs(root.right);
        return left && right;
    }
    return inDfs(root)
};