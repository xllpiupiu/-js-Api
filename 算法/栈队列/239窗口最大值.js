
//239 滑动窗口最大值
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    //采用队列的方式，这里队列不存储元素值而是存储元素下标
    let queue = [];
    let res = [];
    for(let i = 0;i<nums.length;i++) {
        //保持队列第一个数是最大数
        while(queue.length&&nums[i]>nums[queue[queue.length-1]]) {
            queue.pop();
        }
        queue.push(i);
        //判断是否需要移除第一个最大数
        if(queue[0]<=i-k) {
            queue.shift();
        }
        if(i>=k-1) {
            res.push(nums[queue[0]])
        }
    }
    return res;
};