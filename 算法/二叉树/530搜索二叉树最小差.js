//530 搜索二叉树最小差
var getMinimumDifference = function (root) {
    let treeArr = [];
    const inDfs = function (root) {
        if (root === null) return;
        inDfs(root.left);
        treeArr.push(root.val);
        inDfs(root.right);
    }
    inDfs(root);
    let min = Math.abs(treeArr[0] - treeArr[1]);
    for (let i = 1; i < treeArr.length; i++) {
        if (min > Math.abs(treeArr[i] - treeArr[i - 1])) {
            min = Math.abs(treeArr[i] - treeArr[i - 1]);
        }
    }
    return min;
};
/**
 * 使用指针
 */
 var getMinimumDifference = function (root) {
    let pre = null;
    let min = Number.MAX_VALUE;
    const inDfs = function (root) {
        if (root === null) return;
        inDfs(root.left);
        if (pre !== null) {
            min = Math.min(min,Math.abs(pre.val - root.val));
        }
        pre = root;
        inDfs(root.right);
    }
    inDfs(root);
    return min;
};