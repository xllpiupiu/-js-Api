//剑指05 替换空格 
//地址： https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/solution/jian-zhi-offer05ti-huan-kong-ge-by-avves-mri1/
/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function (s) {
    s = s.split('');
    //对s字符串数组扩容
    let count = 0;
    let oldLength = s.length;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            count++;
        }
    }
    let newLength = oldLength + count * 2;
    s.length = newLength;
    console.log(s.length)
    let i = newLength - 1, j = oldLength - 1;
    while (j < i) {
        if (s[j] !== ' ') {
            s[i--] = s[j--];
        } else {
            s[i--] = '0';
            s[i--] = '2';
            s[i--] = '%'
            j--;
        }
    }
    return s.join('')
};