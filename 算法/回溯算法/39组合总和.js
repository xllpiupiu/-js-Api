//39 组合总和
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function (candidates, target) {
    let res = [];
    let path = [];
    const backTracking = function (sum, startIndex) {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            res.push([...path]);
            return;
        }
        for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
            sum += candidates[i];
            path.push(candidates[i]);
            backTracking(sum, i);
            sum -= candidates[i];
            path.pop();
        }
    }
    candidates.sort((a, b) => a - b);
    backTracking(0, 0);
    return res;
};