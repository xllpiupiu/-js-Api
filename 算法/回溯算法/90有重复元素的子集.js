//90 nums有重复元素 但是子集不能重复
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function (nums) {
    let path = [];
    let res = [];
    const backTracking = function (startIndex) {
        res.push([...path]);
        for (let i = startIndex; i < nums.length; i++) {
            if(i>startIndex&&nums[i-1]===nums[i]) {
                continue;
            }
            path.push(nums[i]);
            backTracking(i+1);
            path.pop();
        }
    }
    //需要对数组进行排序 才能进行nums[i]===nums[i-1]判断
    nums.sort((a,b)=>a-b);
    backTracking(0);
    return res;
};
/**
 * 使用used记录使用过的子元素
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function (nums) {
    let path = [];
    let res = [];
    const backTracking = function (startIndex) {
        res.push([...path]);
        let used = [];//记录本层是否使用过此元素
        for (let i = startIndex; i < nums.length; i++) {
            if(used[nums[i]+10]===1) {
                continue;
            }
            used[nums[i]+10] = 1;
            path.push(nums[i]);
            backTracking(i+1);
            path.pop();
        }
    }
    //需要对数组进行排序 才能进行nums[i]===nums[i-1]判断
    nums.sort((a,b)=>a-b);
    backTracking(0);
    return res;
};