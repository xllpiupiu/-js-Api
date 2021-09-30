//589 使用递归实现n叉树的递归遍历
/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function (root) {
    //使用递归遍历
    let res = [];
    if (root === null) return res;
    const dfs = function (root) {
        if (root === null) return;
        //单层递归逻辑
        res.push(root.val);
        for (let item of root.children) {
            item && dfs(item);
        }
    }
    dfs(root);
    return res;
};