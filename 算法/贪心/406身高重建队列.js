/**
 * https://leetcode-cn.com/problems/queue-reconstruction-by-height/solution/406gen-ju-shen-gao-zhong-jian-dui-lie-by-xmu7/
 */
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {
    //使用贪心策略 这是一个二维的问题 所以先考虑一维的情况
    let queue = [];
    //1.根据身高排列 大-》小 身高相同就把K小的放前面
    people.sort((a,b)=>{
        if(a[0]!==b[0]) {
            //降序排列
            return b[0] - a[0];
        } else {
            //按照k降序排列
            return a[1] - b[1];
        }
    })
    //2. 按照k进行插入 此时people是已经排完序
    for(let item of people) {
        queue.splice(item[1],0,item);
    }
    return queue;
};
