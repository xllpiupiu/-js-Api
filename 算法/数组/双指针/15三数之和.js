//15 三数之和
//地址 https://leetcode-cn.com/problems/3sum/solution/15san-shu-zhi-he-by-avvesome-satoshinwt-igzq/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    //不使用Hash使用指针
    //1. 先排序
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return res;
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (right > left) {
            if (nums[i] + nums[left] + nums[right] > 0) {
                right--;
            } else if (nums[i] + nums[left] + nums[right] < 0) {
                left++;
            } else {
                let curRes = [nums[i], nums[left], nums[right]];
                res.push(curRes);
                while (right > left && nums[right] === nums[right - 1]) right--;
                while (right > left && nums[left] === nums[left + 1]) left++;
                left++;
                right--;
            }
        }
    }
    return res;
};