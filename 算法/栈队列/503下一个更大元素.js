/**
 * 503 下一个更大元素
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function (nums) {
    let res = new Array(nums.length).fill(-1)
    let stack = []
    stack.push(0)
    let numsLen = nums.length
    for (let i = 1, len = nums.length * 2; i < len; i++) {
        while (stack.length && nums[i % numsLen] > nums[stack[stack.length - 1]]) {
            res[stack[stack.length - 1]] = nums[i % numsLen]
            stack.pop()
        }
        stack.push(i % numsLen)
    }
    return res
};