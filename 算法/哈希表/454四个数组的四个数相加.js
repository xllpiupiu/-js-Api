//454 四个数组的四个数相加 
//地址：https://leetcode-cn.com/problems/4sum-ii/solution/454si-ge-shu-zu-li-mian-de-si-ge-shu-xia-dzvm/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let map = new Map();
    let res=0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let item = nums1[i] + nums2[j];
            map.set(item, map.has(item) ? map.get(item) + 1 : 1);
        }
    }
    for(let i = 0;i<nums3.length;i++){
        for(let j=0;j<nums4.length;j++){
            let item = nums3[i]+nums4[j];
            if(map.has(0-item)) {
                res+=map.get(0-item);
            }
        }
    }
    return res;
};