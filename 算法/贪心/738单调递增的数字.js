/**
 * 738 单调递增的数字
 */
 var monotoneIncreasingDigits = function (n) {
    //1.将n转换为字符串
    n = n.toString();
    n = n.split('').map(item => parseInt(item));
    let flag = n.length;
    for (let i = n.length - 1; i > 0; i--) {
        if (n[i - 1] > n[i]) {
            n[i - 1] = n[i - 1] - 1;
            n[i] = 9;
            flag = i;
        }
    }
    for(let i = flag;i<n.length;i++) {
        n[i] = 9;
    }
    return parseInt(n.join(''))
};