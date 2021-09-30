//236 二叉树最近公共祖先
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    //采用后序遍历的方式 左 右 中
    // 1.确定递归函数 参数
    const postInorderDfs = function(root,p,q) {
        if(root===p||root===q||root===null) return root;
        let left = postInorderDfs(root.left,p,q);
        let right = postInorderDfs(root.right,p,q);
        if(left===null&&right!==null){
            return right;
        } else if(left!==null&&right===null) {
            return left;
        } else if(left ===null&&right===null) {
            return null;
        } else {
            return root;
        }
    }
    return postInorderDfs(root,p,q);
};