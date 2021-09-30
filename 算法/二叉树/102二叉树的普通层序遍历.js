//102 二叉树的层序遍历
//https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/102er-cha-shu-de-ceng-xu-bian-li-by-avve-zr36/
var levelOrder = function (root) {
    let queue = [];
    if (root === null) return [];
    queue.push(root);
    let treeRes = [];
    while (queue.length) {
        let levelLength = queue.length;
        let curLevel = [];
        while (levelLength--) {
            let node = queue.shift();
            curLevel.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        treeRes.push(curLevel);
    }
    return treeRes;
};