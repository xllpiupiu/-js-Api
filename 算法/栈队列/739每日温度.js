/**
 * 739 
 * 
 */
 var dailyTemperatures = function (temperatures) {
    //1. 使用单调栈
    let length = temperatures.length
    let res = new Array(length).fill(0)
    let stack = []
    stack.push(0)
    let tempIdx = 0
    for (let i = 1; i < length; i++) {
        tempIdx = stack[stack.length - 1]
        if (temperatures[i] < temperatures[tempIdx]) {
            stack.push(i)
        } else if (temperatures[i] === temperatures[tempIdx]) {
            stack.push(i)
        } else {
            while (stack.length && temperatures[i] > temperatures[tempIdx]) {
                res[tempIdx] = i - tempIdx;
                stack.pop()
                tempIdx = stack[stack.length - 1]
            }
            stack.push(i)
        }
    }
    return res
};

//优化简洁
var dailyTemperatures = function (temperatures) {
    //1. 使用单调栈
    let length = temperatures.length
    let res = new Array(length).fill(0)
    let stack = []
    stack.push(0)
    for (let i = 1; i < length; i++) {
        while(stack.length&&temperatures[i]>temperatures[stack[stack.length-1]]) {
            res[stack[stack.length-1]] = i - stack[stack.length-1]
            stack.pop()
        }
        stack.push(i)
    }
    return res
};