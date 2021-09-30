//450 删除二叉搜索树中的节点
var deleteNode = function (root, key) {
    //递归删除
    const dfs = function (root, key) {
        if (root === null) return root;
        if (root.val === key) {
            if(root.left === null ) return root.right;
            if(root.right === null) return root.left;
            let curNode = root.right;
            while (curNode.left !== null) {
                curNode = curNode.left;
            }
            curNode.left = root.left;
            root=root.right;
            return root;
        }
        if(root.val>key) {
            root.left = dfs(root.left,key);
        } else {
            root.right = dfs(root.right,key);
        }
        return root;
    }
    return dfs(root,key);
};