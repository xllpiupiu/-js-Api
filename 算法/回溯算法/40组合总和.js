//40 组合总和
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function (candidates, target) {
    let res = [];
    let path = [];
    let used = new Array(candidates.length).fill(false);
    const backTracking = function (startIndex, sum) {
        if (sum === target) {
            res.push([...path]);
            return;
        }
        for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
            if (i > startIndex && candidates[i] === candidates[i - 1]&&used[i-1]===false) {
                continue;
            }
            sum += candidates[i];
            used[i] = true;
            path.push(candidates[i]);
            backTracking(i + 1, sum);
            used[i] = false;
            sum -= candidates[i];
            path.pop();
        }
    }
    candidates.sort((a, b) => a - b);
    backTracking(0, 0);
    return res;
};
let arr;
arr = [10,1,2,7,6,1,5].sort((a,b)=>a-b);
console.log('arr: ', arr);
let used = new Array(arr.length).fill(true);
console.log('used: ', new Array(arr.length).fill(true));
console.log(combinationSum2(arr,8))
/**
 * 2. 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function (candidates, target) {
    let res = [];
    let path = [];
    // let used = new Array(candidates.length).fill(false);
    const backTracking = function (startIndex, sum) {
        if (sum === target) {
            res.push([...path]);
            return;
        }
        for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
            if (i > startIndex && candidates[i] === candidates[i - 1]) {
                continue;
            }
            sum += candidates[i];
            // used[i] = true;
            path.push(candidates[i]);
            backTracking(i + 1, sum);
            // used[i] = false;
            sum -= candidates[i];
            path.pop();
        }
    }
    candidates.sort((a, b) => a - b);
    backTracking(0, 0);
    return res;
};