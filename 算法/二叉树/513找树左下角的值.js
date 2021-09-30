//513 找树最后一层左下角的值即找最大深度的左侧值
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
 var findBottomLeftValue = function (root) {
    //使用前序遍历'
    let maxPath = 0;
    let maxNode;
    const preDfs = function (root, path) {
        if (root.left === null && root.right === null) {
            if(maxPath<path) {
                maxPath = path;
                maxNode = root.val;
            }
            return;
        }
        root.left && preDfs(root.left, path + 1);
        root.right && preDfs(root.right, path + 1);
        return ;
    }
    preDfs(root, 1);
    return maxNode;
};