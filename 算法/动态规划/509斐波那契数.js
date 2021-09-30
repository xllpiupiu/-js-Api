//509 斐波那契数 
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    //确定dp数组
    if(n<=1)return n;
    let dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    for(let i=2;i<=n;i++) {
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n];
};
//优化的斐波那契数
var fib = function(n) {
    //确定dp数组
    if(n<=1)return n;
    // let dp = new Array(n+1);
    let dp = []
    dp[0] = 0;
    dp[1] = 1;
    for(let i=2;i<=n;i++) {
       let sum = dp[0] + dp[1];
       dp[0] = dp[1];
       dp[1] = sum;
    }
    return dp[1]
};