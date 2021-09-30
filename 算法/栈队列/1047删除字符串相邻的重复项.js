//1047 删除字符串相邻的重复项
var removeDuplicates = function(s) {
    //使用栈
    let stack = [];
    for(let item of s) {
        if(item===stack[stack.length-1]) {
            stack.pop();
        } else {
            stack.push(item);
        }
    }
    return stack.join('')
};