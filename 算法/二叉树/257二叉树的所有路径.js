//257 二叉树的所有路径
var binaryTreePaths = function (root) {
    //使用前序遍历
    let res = [];
    let curPath = [];
    const dfsTree = function (root) {
        //2.递归终止条件
        curPath.push(root.val);
        if (root.left === null && root.right === null) {
            let curStr = curPath.join('->');
            curPath.pop();
            res.push(curStr);
            return;
        }
        root.left&&dfsTree(root.left);
        root.right&&dfsTree(root.right);
        curPath.pop();
    }
    dfsTree(root);
    return res;
};