//904 水果篮子 题解https://leetcode-cn.com/problems/fruit-into-baskets/solution/904-shui-guo-cheng-lan-shi-yong-hua-dong-1btc/
/**
 * 注意题目相当于要求连续子数组且元素种类不能超过2种
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function (fruits) {
    //使用map记录水果种类是否超过两种
    let map = new Map();
    let start = 0;
    let count = 2;
    let maxFruitNums = 0;
    for (let end = 0; end < fruits.length; end++) {
        if (!map.has(fruits[end])) {
            map.set(fruits[end], 1);
            count--;
        } else {
            map.set(fruits[end], map.get(fruits[end]) + 1);
        }
        while (count < 0) {
            let item = fruits[start];
            map.set(item, map.get(item) - 1);
            if (map.get(item) === 0) {
                count++;
                map.delete(item);
            }
            start++;
        }
        maxFruitNums = Math.max(maxFruitNums, end - start + 1);
    }
    return maxFruitNums;
};