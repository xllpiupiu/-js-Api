
//350
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function (nums1, nums2) {
    //考虑使用map
    let nums1Map = new Map();
    for (let item of nums1) {
        nums1Map.set(item, nums1Map.has(item) ? nums1Map.get(item) + 1 : 1)
    }
    let res = []
    for (let item of nums2) {
        if (nums1Map.has(item) && nums1Map.get(item) !== 0) {
            nums1Map.set(item, nums1Map.get(item) - 1);
            res.push(item);
        }
    }
    return res;
};