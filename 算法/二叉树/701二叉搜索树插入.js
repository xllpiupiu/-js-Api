//701 二叉搜索树插入
/**
 * 迭代方式
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var insertIntoBST = function(root, val) {
    //使用迭代方法 因为是搜索二叉树
    let curNode = root;
    let pre = curNode;
    let node = new TreeNode(val);
    if(root===null) {
        return node
    }
    while(curNode!==null) {
        pre = curNode;
        if(curNode.val>val) {
            curNode = curNode.left;
        } else if(curNode.val<val) {
            curNode = curNode.right;
        }
    }
    if(pre.val>val) {
        pre.left = node;
    } else {
        pre.right = node;
    }
    return root;
};
/**
 * 2. 递归方式
 */
 var insertIntoBST = function (root, val) {
    if (root === null) {
        let node = new TreeNode(val);
        return node;
    }
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val);
    }
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
};