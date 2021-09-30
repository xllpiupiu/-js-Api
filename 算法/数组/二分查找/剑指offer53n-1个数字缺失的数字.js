/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function (nums) {
    //0~n-1
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if(nums[mid] !== mid) {
            right = mid -1;
        } else {
            left = mid+1;
        }
    }
    return left;
};