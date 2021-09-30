/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function (x) {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }
    let left = 1;
    let right = Math.floor(x / 2);
    while (left < right) {
        //这里要注意mid的算法 要left + (right - left + 1)/2 因为left是从1开始的
        let mid = Math.floor(left + (right - left+1) / 2);
        if (mid > Math.floor(x / mid)) {
            //往左侧查找
            right = mid - 1;
        } else {
            left  = mid;
        }
    }
    return left;
};