//501 二叉树找众树
var findMode = function (root) {
    //采用中序 遍历
    //因为对于搜索二叉树中序遍历是有序的
    let count = 0;
    let maxCount = 0;
    let pre = null;
    let res = [];
    const inDfs = function (root) {
        if (root === null) return;
        inDfs(root.left);
        if (pre === null) {
            count = 1;
        } else if (pre.val === root.val) {
            count++;
        } else {
            count = 1;
        }
        pre = root;
        if (count === maxCount) {
            res.push(root.val);
        } else if (count > maxCount) {
            res =[];
            maxCount = count;
            res.push(root.val);
        }
        inDfs(root.right);
    }
    inDfs(root);
    return res;
};