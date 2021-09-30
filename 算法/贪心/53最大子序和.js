//53 最大子序和
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
    if (nums.length === 0) return 0;
    let sum = 0;
    let res = nums[0];
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > res) {
            res = sum;
        }
         if (sum <= 0) {
            sum = 0;
        }
    }
    return res;
};