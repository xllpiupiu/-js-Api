//28 KMP算法使用
//地址：https://leetcode-cn.com/problems/implement-strstr/solution/28shi-xian-strstrkmpsuan-fa-by-avvesome-tfcqe/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function (haystack, needle) {
    //1. 判断needle是否是空
    if (needle.length === 0) {
        return 0;
    }
    let next = [];
    const getNext = function (needle) {
        let j = -1;
        next[0] = j;
        for (let i = 1; i < needle.length; i++) {
            while (j >= 0 && needle[i] !== needle[j + 1]) {
                j = next[j];//回退操作
            }
            if (needle[i] === needle[j + 1]) {
                j++;
            }
            next[i] = j;
        }
    }
    getNext(needle);
    let j = -1;
    for (let i = 0; i < haystack.length; i++) {
        while (j >= 0 && haystack[i] !== needle[j + 1]) {
            j = next[j];
        }
        if (haystack[i] === needle[j + 1]) {
            j++;
        }
        if (j === (needle.length - 1)) {
            return i-needle.length+1;
        }
    }
    return -1;
};