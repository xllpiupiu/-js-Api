//35 https://leetcode-cn.com/problems/search-insert-position/
var searchInsert = function (nums, target) {
    //使用左闭右闭
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return right + 1;
};