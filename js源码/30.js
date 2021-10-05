/**
 * 1. 看如下代码输出
 * forEach 的callback不会等待异步的执行
 */
const list = [1, 2, 3]
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}
function test() {
    list.forEach(async x => {
        const res = await square(x)
        console.log(res)
    })
}
// test()
//1 4 9 1秒后同时打印
/**
 * 按1s间隔打印 1 4 9 
 * 可以使用 for for---in  for----of    promise.then
 * @param {*} list 
 */
async function test2(list) {
    for (let i = 0; i < list.length; i++) {
        const res = await square(list[i])
        console.log(res)
    }
}
test2(list)
//依次打印 1 4 9按1s的间隔
function test3() {
    let promise = Promise.resolve()
    list.forEach(x => {
        promise = promise.then(() => square(x)).then(console.log)
    })
}