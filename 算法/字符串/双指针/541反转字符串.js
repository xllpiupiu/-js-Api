//541 反转字符串
//地址： https://leetcode-cn.com/problems/reverse-string-ii/solution/541fan-zhuan-zi-fu-chuan-by-avvesome-sat-oym1/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function (s, k) {
    const reverseStrFn = function (s, start, end) {
        while (start < end) {
            let temp = s[start];
            s[start++] = s[end];
            s[end--] = temp;
        }
        return s;
    }
    s = s.split('');
    for (let i = 0; i < s.length; i += 2 * k) {
        if (s.length - i > k) {
            reverseStrFn(s, i, i + k - 1);
        } else {
            reverseStrFn(s, i, s.length - 1);
        }
    }
    return s.join('')
};