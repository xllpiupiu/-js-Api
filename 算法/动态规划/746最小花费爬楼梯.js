//746 使用最小花费爬楼梯
var minCostClimbingStairs = function (cost) {
    //
    let dp = new Array(cost.length);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }
    return Math.min(dp[cost.length-1],dp[cost.length-2]);
};
/**
 * 优化一下空间
 */
 var minCostClimbingStairs = function (cost) {
    //
    // let dp = new Array(cost.length);
    let dp = [];
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < cost.length; i++) {
        let sum = Math.min(dp[0], dp[1]) + cost[i];
        dp[0] = dp[1];
        dp[1] = sum;
    }
    return Math.min(dp[0],dp[1]);
};