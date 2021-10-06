/**
 * 496 下一个更大元素
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function (nums1, nums2) {
    //1. 用hash记录nums1里面的元素
    let hash = {}
    for (let i = 0, len = nums1.length; i < len; i++) {
        hash[nums1[i]] = i
    }
    let res = new Array(nums1.length).fill(-1)
    let stack = []
    stack.push(0)
    for (let i = 1; i < nums2.length; i++) {
        while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
            let idx = stack[stack.length - 1]
            if (hash[nums2[idx]]!==undefined) {//nums1中存在此元素才对res做处理注意这里需要处理为!==undefined 因为有下标0
                res[hash[nums2[idx]]] = nums2[i]
            }
            stack.pop()
        }
        stack.push(i)
    }
    return res
};