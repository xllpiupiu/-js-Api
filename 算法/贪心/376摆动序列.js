//376 摆动序列  只需要统计峰值个数即可
/**
 * @param {number[]} nums
 * @return {number}
 */
 var wiggleMaxLength = function (nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let preDiff = 0;
    let curDiff = 0;
    let res = 1;
    for (let i = 1; i < nums.length; i++) {
        curDiff = nums[i] - nums[i - 1];
        if (curDiff > 0 && preDiff <= 0 || curDiff < 0 && preDiff >= 0) {
            res++;
            preDiff = curDiff;
        }
    }
    return res;
};