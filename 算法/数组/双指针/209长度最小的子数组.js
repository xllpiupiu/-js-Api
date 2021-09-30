//209长度最小的子数组
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function (target, nums) {
    //活动窗口的方法，可以理解为双指针
    let i = 0;
    let sum = 0;
    let res = nums.length + 1;
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        while (sum >= target) {
            let subLength = j - i + 1;
            res = res < subLength ? res : subLength;
            sum -= nums[i++];
        }
    }
    return res === nums.length + 1 ? 0 : res;
};
minSubArrayLen(11,[1,2,3,4,5])