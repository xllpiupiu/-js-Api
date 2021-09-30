//47 全排列
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let path = [];
    let res = [];
    let useddfs = [];
    const backTracking = function() {
        if(path.length===nums.length) {
            res.push([...path]);
            return ;
        }
        let usedLevel = [];
        for(let i=0;i<nums.length;i++) {
            if(usedLevel[nums[i]+10]===1) {
                continue;
            }
            if(useddfs[i]===true) continue;
            usedLevel[nums[i]+10]=1;
            useddfs[i] = true;
            path.push(nums[i]);
            backTracking();
            useddfs[i] = false;
            path.pop();
        }
    }
    backTracking();
    return res;
};