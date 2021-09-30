/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function (nums, val) {
    //使用快慢指针
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if(nums[fastIndex] !== val) {
            nums[slowIndex++] = nums[fastIndex];
        }
    }
    return slowIndex;
};

