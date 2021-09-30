//150 逆波兰表达式

/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function (tokens) {
    //简单的使用栈去处理
    let stack = [];
    for (let item of tokens) {
        if (item === '+' || item === '-' || item === '/' || item === '*') {
            let num1 = parseInt(stack.pop());
            let num2 = parseInt(stack.pop());
            switch (item) {
                case '+': stack.push(num1 + num2); break;
                case '-': stack.push(num2 - num1); break;
                case '*': stack.push(num1 * num2); break;
                case '/': stack.push(num2 / num1 | 0); break;
                default: break;
            }
        } else {
            stack.push(item);
        }
    }
    return stack.pop();
};
evalRPN(["4", "13", "5", "/", "+"])
console.log(-1.023 | 0);
console.log(1.23 | 0)

/**
 * 2. 利用map
 */
 var evalRPN = function (tokens) {
     //简单的使用栈去处理
     let stack = [];
     const map = new Map([
         ['+', (a, b) => b * 1 + a * 1],
         ['-', (a, b) => b - a],
         ['*', (a, b) => a * b],
         ['/', (a, b) => (b / a) | 0]
     ])
     for (let item of tokens) {
         if (map.has(item)) {
             stack.push(map.get(item)(stack.pop(), stack.pop()))
         } else {
             stack.push(item);
         }
     }
     return stack.pop()
 };
 