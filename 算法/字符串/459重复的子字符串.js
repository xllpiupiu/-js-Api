//459 重复的子字符串
//地址： https://leetcode-cn.com/problems/repeated-substring-pattern/solution/459zhong-fu-de-zi-zi-fu-chuan-by-avvesom-fyeu/
/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function (s) {
    //还是使用KMP匹配
    //KMP算法适合判断一个字符串在另外一个字符串中是否出现
    let next = [];
    const getNext = function (s) {
        let j = -1;
        next[0] = j;
        for (let i = 1; i < s.length; i++) {
            while (j >= 0 && s[i] !== s[j + 1]) {
                j = next[j];
            }
            if (s[i] === s[j + 1]) {
                j++;
            }
            next[i] = j;
        }
    }
    getNext(s);
    let len = next.length;
    if (next[len-1]!==-1&&len % (len - (next[len - 1] + 1)) === 0) {
        return true;
    }
    return false;
};