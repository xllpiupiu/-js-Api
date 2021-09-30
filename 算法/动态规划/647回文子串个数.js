
/**
 * 647 回文子串个数
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function (s) {
    let res = 0;
    //  1. 动态规划
    let dp = new Array(s.length).fill().map(item => new Array(s.length).fill(false));
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (s[i] === s[j]) {
                if (j - i <= 1) {
                    res++;
                    dp[i][j] = true;
                } else if(dp[i+1][j-1]===true) {
                    res++;
                    dp[i][j] = true;
                }
            }
        }
    }
    return res;
};