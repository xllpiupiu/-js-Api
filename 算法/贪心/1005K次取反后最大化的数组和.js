/**
 * 1
 */
 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b));//nums按绝对值从小到大排序
    let res = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < 0 && k > 0) {
            nums[i] *= -1;
            k--;
        }
        res += nums[i];
    }
    if (k > 0 && k % 2 === 1) {
        res -= nums[0];
        nums[0] *= -1;
        res += nums[0];
    }
    return res;
};
largestSumAfterKNegations([1,-2,-4,1]);