//108 将有序数组转换为二叉搜索树
var sortedArrayToBST = function(nums) {
    //使用递归方法
    const dfs = function(nums,start,end) {
        if(start>end) return null;
        let mid = Math.floor(start+(end-start)/2);
        let node = new TreeNode(nums[mid]);
        node.left = dfs(nums,start,mid-1);
        node.right = dfs(nums,mid+1,end);
        return node;
    }
    return dfs(nums,0,nums.length-1)
};