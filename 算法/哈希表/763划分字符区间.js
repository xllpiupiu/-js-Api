//763 
var partitionLabels = function (s) {
    //1. 找每个字符出现在字符串中的最后位置
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = i;
    }
    let left = 0;
    let right = 0;
    let res = [];
    for (let i = 0; i < s.length; i++) {
        right = Math.max(right, hash[s[i]]);
        if (i === right) {
            res.push(right - left + 1);
            left = i + 1;
        }
    }
    return res;
};