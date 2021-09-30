//剑指offer079 https://leetcode-cn.com/problems/TVdhkn/solution/jian-zhi-offer079-by-avvesome-satoshinwt-bn1n/
var subsets = function(nums) {
    const res = [];
    const curRes = [];
    const backTracking = function(nums,index,curRes) {
        res.push([...curRes]);
        if(index==nums.length) {
            return ;
        }
        for(let i = index;i<nums.length;i++) {
            curRes.push(nums[i]);
            backTracking(nums,i+1,curRes);
            curRes.pop();
        }
    }
    backTracking(nums,0,curRes);
    return res;
};