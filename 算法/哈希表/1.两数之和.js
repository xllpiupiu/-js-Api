// 1.两数之和 https://leetcode-cn.com/problems/two-sum/solution/1liang-shu-zhi-he-by-avvesome-satoshinwt-iwwx/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if(map.has(target-nums[i])) {
            return [map.get(target-nums[i]),i];
        }
        map.set(nums[i], i);
    }
    return []
};