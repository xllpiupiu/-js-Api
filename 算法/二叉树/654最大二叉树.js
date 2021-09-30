//654 最大二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function (nums) {
    const travelTree = function (nums, start, end) {
        if (start > end) return null;
        let maxNodeVal = nums[start];
        let maxNodeIndex = start;
        for (let i = start; i <= end; i++) {
            if (maxNodeVal < nums[i]) {
                maxNodeVal = nums[i];
                maxNodeIndex = i;
            }
        }
        const curNode = new TreeNode(maxNodeVal);
        if (start === end) {
            return curNode;
        }
        curNode.left = travelTree(nums, start, maxNodeIndex - 1);
        curNode.right = travelTree(nums, maxNodeIndex + 1, end);
        return curNode;
    }
    return travelTree(nums, 0, nums.length - 1)

};