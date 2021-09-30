//349 两个数组的交集 https://leetcode-cn.com/problems/intersection-of-two-arrays/solution/349liang-ge-shu-zu-jiao-ji-by-avvesome-s-dgql/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function (nums1, nums2) {
    const res = new Set();
    const nums1Set = new Set(nums1);
    for(let item of nums2) {
        if(nums1Set.has(item)) {
            res.add(item);
        }
    }
    return [...res]
};