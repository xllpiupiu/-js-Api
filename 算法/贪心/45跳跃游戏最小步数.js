// 45 跳跃游戏的最小步数
/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function (nums) {
    let curDistance = 0;
    let nextDistance = 0;
    let res = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        nextDistance = Math.max(i + nums[i], nextDistance);
        if (i === curDistance) {
            res++;
            curDistance = nextDistance;
        }
    }
    return res;
};