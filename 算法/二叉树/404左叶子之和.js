//404 左叶子之和
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumOfLeftLeaves = function (root) {
    //采用前序遍历
    const perDfs = function (root) {
        //2. 确定终止条件
        if (root === null) return 0;
        let sum = 0;
        if (root.left !== null && root.left.left === null && root.left.right === null) {
            sum = root.left.val;
        }
        let leftLeftSum = perDfs(root.left);
        let rightLeftSum = perDfs(root.right);
        return sum + leftLeftSum + rightLeftSum;
    }
    return perDfs(root)
};