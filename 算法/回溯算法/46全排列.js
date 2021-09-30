//46 全排列
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    //首先题目不含重复数字
    let path = [];
    let res = [];
    let used = [];
    const backTracking = function() {
        if(path.length===nums.length) {
            res.push([...path]);
            return ;
        }
        for(let i=0;i<nums.length;i++) {
            if(used[i]===true) continue;
            path.push(nums[i]);
            used[i] = true;
            backTracking();
            used[i] = false;
            path.pop();
        }
    }
    backTracking();
    return res;
};
console.log(permute([1,2,4]))