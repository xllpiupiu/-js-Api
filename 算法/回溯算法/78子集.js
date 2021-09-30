//78 求子集
var subsets = function (nums) {
    let res = [];
    let path = [];
    const backTracking = function (startIndex) {
        res.push([...path]);
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]);
            backTracking(i + 1);
            path.pop();
        }
    }
    backTracking(0);
    return res;
};