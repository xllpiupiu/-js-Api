//55 跳跃游戏
/**好像有在实习面试的时候网易笔试遇到过
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function (nums) {
    let cover = 0;
    for (let i = 0; i <= cover; i++) {
        cover = Math.max(i + nums[i], cover);
        if (cover >= nums.length - 1) return true;
    }
    return false;
};