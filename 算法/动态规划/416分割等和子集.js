/**
 * 416 分割等和子集
 */
 var canPartition = function (nums) {
    let sum = 0;
    for (let item of nums) {
        sum += item;
    }
    if(sum%2!==0) return false;//不能分成两份整数
    let target = sum/2;
    let dp = new Array(target+1).fill(0);
    for(let i=0;i<nums.length;i++) {
        for(let j=target;j>=nums[i];j--) {
            dp[j] = Math.max(dp[j],dp[j-nums[i]]+nums[i])
        }
    }
    if(dp[target] === target) return true;
    return false;
};