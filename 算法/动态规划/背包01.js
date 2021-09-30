/**
 * 01 背包问题
 * https://programmercarl.com/%E8%83%8C%E5%8C%85%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%8001%E8%83%8C%E5%8C%85-1.html#%E4%BA%8C%E7%BB%B4dp%E6%95%B0%E7%BB%8401%E8%83%8C%E5%8C%85
 */
function testBagProblem(weight,value,bagWeight) {
    //dp[i][j]  i表示第几个物品  j表示背包容量
    let dp = new Array(weight.length).fill().map(item=>new Array(bagWeight+1).fill(0));
    //初始化
    for(let j = weight[0];j<bagWeight;j++) {
        dp[0][j] = value[0]; 
    }
    //先遍历物品 再遍历背包
    for(let i=1;i<weight.length;i++) {
        for(let j = 0;j<=bagWeight;j++) {
            if(j<weight[i]) {
                //物品放不进  即不放物品i
                dp[i][j] = dp[i-1][j];
            } else {
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-weight[i]]+value[i])
            }
        }
    }
    return dp[weight.length-1][bagWeight]
}
console.log(testBagProblem([1,3,4],[15,20,30],4))

/**
 * 2. 使用一维数组
 */
function bagProblem(weight,value,bageWeight) {
    let dp = new Array(bageWeight+1).fill(0);
    for(let i=0;i<weight.length;i++) {
        for(let j=bageWeight;j>=weight[i];j--) {
            dp[j] = Math.max(dp[j],dp[j-weight[i]]+value[i]);
        }
    }
    return dp[bageWeight];
}
console.log(bagProblem([1,3,4],[15,20,30],4))