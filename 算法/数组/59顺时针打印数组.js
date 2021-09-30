//59 地址：https://leetcode-cn.com/problems/spiral-matrix-ii/solution/59-luo-xuan-ju-zhen-by-avvesome-satoshin-4cwd/
/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function (n) {
    //模拟顺时针打印
    //1. 确定l r t b初始值
    let l = 0, r = n - 1, t = 0, b = n - 1;
    let size = n*n;
    let num = 1;
    let res = [];
    for(let i = 0;i<n;i++) {
        res[i] = [];
    }
    while(num<=size) {
        for(let i =l;i<=r;i++) {
            res[t][i] = num++;
        }
        t++;
        for(let i=t;i<=b;i++) {
            res[i][r] = num++;
        }
        r--;
        for(let i = r;i>=l;i--) {
            res[b][i] = num++;
        }
        b--;
        for(let i = b;i>=t;i--) {
            res[i][l] = num++;
        }
        l++;
    }
    return res;
};