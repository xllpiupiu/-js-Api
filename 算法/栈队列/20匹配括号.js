//20 匹配括号
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    //1. 使用栈
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(')');
        else if (s[i] === '{') stack.push('}');
        else if (s[i] === '[') stack.push(']');
        else if (stack.length === 0 || stack[stack.length - 1] != s[i]) return false;//这里else if里面不能使用stack.pop()
        else stack.pop();
    }
    return stack.length === 0;
};
/**
 * 2. 使用obj实现
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    //使用map
    const obj = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            stack.push(s[i]);
            continue;
        }
        if (obj[stack.pop()] !== s[i]) {
            return false;
        }
    }
    return stack.length === 0;
};