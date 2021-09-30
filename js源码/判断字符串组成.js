/**
 * 判断字符串是否由数字 字母 下划线组成
 */
let str='sg';
function isValid(str) {
    const reg = /^\w+$/i;
    return reg.test(str);
}
console.log(isValid(str))