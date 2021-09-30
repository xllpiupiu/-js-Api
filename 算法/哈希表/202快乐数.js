/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function (n) {
    //定义获取sum的函数
    //判断sum是否重复出现 判断一个元素是否重复出现就用hash
    const getSum = function (n) {
        let sum = 0;
        while (n) {
            sum += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }
        return sum;
    }
    let map = new Map();
    while (1) {
        let sum = getSum(n);
        if (sum === 1) {
            return true;
        }
        if(map.has(sum)) {
            return false;
        }
        map.set(sum,1)
        n=sum;
    }
};

// 作者：avvesome-satoshinwt
// 链接：https://leetcode-cn.com/problems/happy-number/solution/202kuai-le-shu-by-avvesome-satoshinwt-huzw/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。