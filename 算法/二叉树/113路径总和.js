//113 路径总和
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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    let res = [];
    let path = [];
    const preDfs = function(root,count) {
        path.push(root.val);
        if(root.left===null&&root.right===null&&count===0) {
            res.push([...path]);
        }
        root.left&&preDfs(root.left,count-root.left.val);
        root.right&&preDfs(root.right,count-root.right.val);
        path.pop();
    }
    if(root===null) return res;
    preDfs(root,targetSum-root.val);
    return res;
};