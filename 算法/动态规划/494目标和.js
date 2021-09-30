var findTargetSumWays = function (nums, target) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    if (Math.abs(target) > sum) return 0;
    if ((target + sum) % 2 === 1) return 0;
    let bageSize = (target + sum) / 2;
    let dp = new Array(bageSize + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = bageSize; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }
    return dp[bageSize]
};