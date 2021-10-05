
/**
 * 1. 分析以下程序段的输出顺序
 * 主要是考察微任务 宏任务
 */
setTimeout(()=>console.log(0))
new Promise((resolve)=>{
    console.log(1)
    resolve(2)
    console.log(3)
}).then(res=>console.log(res))
new Promise((resolve)=>{
    console.log(4)
    resolve(5)
}).then(res=>console.log(res)).then(()=>console.log(6))
console.log(8)
Promise.resolve(7).then(res=>console.log(res))
/**
 * 分析：1 3 4 2 5 6 0
 * 1. setTimeout放到宏任务队列
 * 2. 立即执行new Promise 1 3  then放到微任务队列
 * 3. 立即执行new Promise 4 then放到微任务队列
 * 4. 循环微任务队列 2 5 6 
 * 5. 循环宏任务队列
 */