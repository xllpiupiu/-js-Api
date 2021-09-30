/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function (nums, target) {
    //二分查找
    const findStart = function (nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (nums[mid] === target && (nums[mid - 1] < target || mid - 1 < 0)) {
                return mid;
            } else if (nums[mid] >= target) {
                //因为是要找起始位置所以大于=的时候往左侧查找
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }
    const findEnd = function (nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (nums[mid] === target && (mid === nums.length - 1||nums[mid+1]>target)) {
                return mid;
            } else if(nums[mid]<=target) {
                //往右侧
                left = mid + 1;
            } else {
                right = mid -1;
            }
        }
        return -1;
    }
    let start = findStart(nums, target);
    if(start === -1) {
        return [-1,-1];
    }
    let end = findEnd(nums, target);
    return [start,end]
};