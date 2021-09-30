
//559 N叉树最大深度
var maxDepth = function (root) {
    //层序遍历 这就不写了
    //前序遍历
    let res = 0;
    const getDepth = function (root, depth) {
        res = res > depth ? res : depth;
        for (let item of root.children) {
            item && getDepth(item, depth + 1);
        }
    }
    if(root===null) return res;
    getDepth(root,1);
    return res;
};
/**
 * 后序遍历实现
 */
 var maxDepth = function (root) {
    //层序遍历 这就不写了
    //后序遍历
    if (root === null) return 0;
    let Depth = 0;
    for (let i = 0;i<root.children.length;i++) {
        Depth = Math.max(Depth, maxDepth(root.children[i]));
    }
    return Depth + 1;
};