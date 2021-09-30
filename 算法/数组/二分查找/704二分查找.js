//力扣地址 https://leetcode-cn.com/problems/binary-search/solution/704er-fen-cha-zhao-by-avvesome-satoshinw-5wis/

var search = function (nums, target) {
    //使用左闭右闭类型二分查找
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] > target) {
            //向左查找
            right = mid - 1;
        } else if (nums[mid] < target) {
            //向右查找
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};