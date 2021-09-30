/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function (num) {
    if (num === 1) {
        return true;
    }
    let left = 2;
    let right = Math.floor(num / 2);
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (mid * mid > num) {
            right = mid -1;
        } else if(mid*mid < num) {
            left = mid + 1;
        } else {
            return true;
        }
    }
    return false;
};