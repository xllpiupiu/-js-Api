/**
 * 力扣503https://leetcode-cn.com/problems/next-greater-element-ii/solution/dai-ma-sui-xiang-lu-dai-ni-gao-ding-dan-0ccnk/
 * 一维数组：寻找左边或者右边第一个比自己大或者小的元素的位置 可以考虑使用单调栈
 * https://programmercarl.com/0739.%E6%AF%8F%E6%97%A5%E6%B8%A9%E5%BA%A6.html#%E6%80%9D%E8%B7%AF
 * 
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
        //栈里面保存下标
        stack.push(i % numsLen)
    }
    return res
};