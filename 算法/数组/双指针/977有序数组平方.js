//977 有序数组平方
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function (nums) {
    //没有限定空间复杂度
    let res = new Array(nums.length);
    resLength = nums.length-1;
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const numLeft = nums[left]*nums[left];
        const numRight = nums[right]*nums[right];
        if(numLeft>=numRight) {
            res[resLength--]=numLeft;
            left++;
        }else {
            res[resLength--]=numRight;
            right--;
        }
    }
    return res;
};