//剑指58  左旋转字符串
//地址https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/solution/offer58zuo-xuan-zhuan-zi-fu-chuan-by-avv-1ioh/
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    //使用局部翻转再全部翻转
    const reverseStr = function(s,start,end) {
        while(start<end) {
            let temp = s[start];
            s[start++] = s[end];
            s[end--] = temp;
        }
        return s;
    }
    s = s.split('');
    s = reverseStr(s,0,n-1);
    s = reverseStr(s,n,s.length-1);
    s = reverseStr(s,0,s.length-1);
    return s.join('');
};