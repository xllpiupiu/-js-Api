//235 二叉搜索树最近公共祖先
/**
 * 迭代方法
 * @param {*} root 
 * @param {*} p 
 * @param {*} q 
 * @returns 
 */
var lowestCommonAncestor = function(root, p, q) {
    //因为是二叉树所以可以使用简 单的迭代方式完成
    let curNode = root;
    while(curNode!==null) {
        if(curNode.val>p.val&&curNode.val>q.val) {
            curNode = curNode.left;
        } else if(curNode.val<p.val&&curNode.val<q.val) {
            curNode = curNode.right;
        } else {
            return curNode
        }
    }
    return null;
};
/**
 * 2. 递归方法
 */
 var lowestCommonAncestor = function(root, p, q) {
    //使用递归
    const inOrderDfs = function(root,p,q) {
        if(root===null) return ;

        if(root.val>p.val&&root.val>q.val) {
            return inOrderDfs(root.left,p,q);
        } else if(root.val<p.val&&root.val<q.val) {
            return inOrderDfs(root.right,p,q);
        } else {
            return root;
        }
    }
    return inOrderDfs(root,p,q);
};