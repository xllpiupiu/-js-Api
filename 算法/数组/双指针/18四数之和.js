//18 四数之和
//地址 https://leetcode-cn.com/problems/4sum/solution/18si-shu-zhi-he-by-avvesome-satoshinwt-02xn/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function (nums, target) {
    //使用双指针方法
    let res = [];
    let length = nums.length;
    //1. 首先排序
    nums.sort((a, b) => a - b);
    for (let i = 0; i < length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) { continue; }
        for (let j = i + 1; j < length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) { continue; }
            let left = j + 1;
            let right = length - 1;
            while (right > left) {
                if (nums[i] + nums[j] + nums[left] + nums[right] > target) {
                    right--;
                } else if (nums[i] + nums[j] + nums[left] + nums[right] < target) {
                    left++;
                } else {
                    let temp = [nums[i], nums[j], nums[left], nums[right]];
                    res.push(temp);
                    while (right > left && nums[right] === nums[right - 1]) right--;
                    while (right > left && nums[left] === nums[left + 1]) left++;
                    left++;
                    right--;
                }
            }
        }
    }
    return res;
};