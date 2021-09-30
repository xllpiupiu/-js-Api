//700 二叉搜搜树
var searchBST = function (root, val) {
    if (root === null) return root;
    let curNode = root;
    while (curNode !== null) {
        if (curNode.val > val) {
            curNode = curNode.left;
        } else if (curNode.val < val) {
            curNode = curNode.right;
        } else {
            return curNode;
        }
    }
    return null
};
/**
 * 迭代方式
 * @param {*} root 
 * @param {*} val 
 * @returns 
 */
var searchBST = function (root, val) {
    if (root === null || root.val === val) return root;
    if (root.val > val) return searchBST(root.left, val);
    if (root.val < val) return searchBST(root.right, val);
    return null;
};