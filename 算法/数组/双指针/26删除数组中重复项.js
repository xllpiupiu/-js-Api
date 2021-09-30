
//力扣 26 https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    //使用快慢指针
    let slowIndex = 0;
    for(let fastIndex = 1;fastIndex<nums.length;fastIndex++) {
        if(nums[fastIndex] !== nums[slowIndex]) {
            nums[++slowIndex] = nums[fastIndex];
        }
    }
    return ++slowIndex;
};