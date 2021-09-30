//70 爬楼梯
var climbStairs = function(n) {
    if(n<=2) {
        return n;
    }
    let dp = new Array(n);
    dp[1] = 1;
    dp[2] = 2;
    for(let i=3;i<=n;i++) {
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n];
};
/**
 * 第二种方法
 */
 var climbStairs = function(n) {
    if(n<=2) {
        return n;
    }
    let dp=[]
    dp[1] = 1;
    dp[2] = 2;
    for(let i=3;i<=n;i++) {
       let sum = dp[1]+dp[2];
       dp[1] = dp[2];
       dp[2] = sum;
    }
    return dp[2];
};