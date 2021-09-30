/**
 * 分发糖果  最小糖果数
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function (ratings) {
    //使用两次贪心 
    //从左->右遍历一次 从右->左遍历一次
    const candyRes = new Array(ratings.length).fill(1);
    //从左--->右  升序
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candyRes[i] = candyRes[i - 1] + 1;
        }
    }
    //从右--->左  
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candyRes[i] = Math.max(candyRes[i], candyRes[i + 1] + 1)
        }
    }
   let res =  candyRes.reduce((pre,cur,index,arr)=>pre+cur);
    return res;
};