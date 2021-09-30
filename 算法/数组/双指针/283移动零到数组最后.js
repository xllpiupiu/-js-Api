//283 移动0元素到数组末尾 https://leetcode-cn.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let slowIndex = -1;
    for(let fastIndex = 0;fastIndex<nums.length;fastIndex++) {
        if(nums[fastIndex] !== 0) {
            nums[++slowIndex] = nums[fastIndex];
            if(fastIndex!==slowIndex) {
                nums[fastIndex]=0;
            }
        }
    }
    return nums;
};