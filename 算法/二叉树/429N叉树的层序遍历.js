//429 N 叉树的遍历主要是使用node.children
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    let queue = [];
    let treeRes = [];
    if (root === null) return treeRes;
    queue.push(root);
    while (queue.length) {
        let levelLength = queue.length;
        let curLevel = [];
        for (let i = 0; i < levelLength; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            for (let item of node.children) {
                item && queue.push(item);
            }
        }
        treeRes.push(curLevel);
    }
    return treeRes;
};