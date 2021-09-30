//因为使用了二分查找的前提必须是这个数组有序且没有重复的
var intersection = function (nums1, nums2) {
    const binary = function (nums,target) {
        //使用二分查找
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
    const res = new Set();
    for(let i = 0;i<nums2.length;i++) {
        if(binary(nums1.sort((a,b)=>a-b),nums2[i]) !== -1 && !res.has(nums2[i])) {
            res.add(nums2[i]);
        }
    }
    return [...res];
};

let res = intersection([2,1],[2,3,1,1]);
console.log('res: ', res);

/**
 * 2. 使用API
 */
 var intersection = function (nums1, nums2) {
    const res = new Set();
    nums1.forEach(v=>{
        if(nums2.indexOf(v)!==-1 && !res.has(v)) {
            res.add(v)
        }
    })
    return [...res]
};