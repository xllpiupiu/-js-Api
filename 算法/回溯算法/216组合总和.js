//216 组合总和III
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function (k, n) {
    //回溯算法
    let res = [];
    let path = [];
    const backTracking = function (sum, k, n, startIndex) {
        if (sum > n) {
            return;//和大于目标值直接返回
        }
        if (path.length === k) {
            if (sum === n) {
                res.push([...path]);
            }
            return;
        }
        for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
            sum += i;
            path.push(i);
            backTracking(sum, k, n, i + 1);
            sum -= i;
            path.pop();
        }
    }
    backTracking(0, k, n, 1);
    return res;
};