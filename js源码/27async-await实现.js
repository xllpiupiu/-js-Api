/**
 * 参考链接
 * https://www.jb51.net/article/201187.htm
 */
// async function testAsync() {
//     return 'hello async'
// }
// console.log(testAsync())//Promise { 'hello async' }
// testAsync().then((res)=>{
//     console.log(res)
// })//hello async

/**
 * 2. async await是promise 和 Generator的语法糖
 * 我们先看一下Generator
 */
function* testGenerator() {
    const res = yield 'hello'
    console.log('res>>>', res)
    return
}
const resGenerator = testGenerator();
console.log('res>>>', resGenerator)//res>>> Object [Generator] {}
console.log('resGenerator.next()', resGenerator.next())//resGenerator.next() { value: 'hello', done: false }
console.log('resGenerator.next>>>>', resGenerator.next('world'))
// res>>> world
// resGenerator.next>>>> { value: undefined, done: true }
/**
 * 3. async await实现第一版本
 * https://www.dazhuanlan.com/chaoxingyan/topics/974581
 */
function run(fn) {
    const generator = fn()
    function _next(data) {
        const { value, done } = generator.next(data);
        if (done) return value
        if (value.then) {
            value.then(data => _next(data))
        } else {
            _next(data)
        }
    }
    _next()
}
//使用
function sleep(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`slept ${duration}ms`), duration)
    })
}
function* work() {
    const ret1 = yield sleep(30)
    console.log('ret1: ', ret1);
    const ret2 = yield sleep(40)
    console.log('ret2: ', ret2);
}
run(work)
// ret1:  slept 30ms
// ret2:  slept 40ms
/**
 * 第二个版本
 * https://juejin.cn/post/7007031572238958629
 * 高阶函数概念 入参是函数 返回一个函数
 */
//----------------------------------------非最终代码-------------------------
function fn(nums) {
    //返回一个Promise对象  因为async 就是返回Promise对象
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(nums * 2)
        }, 1000)
    })
}
function* generator() {
    const num1 = yield fn(1)
    const num2 = yield fn(num1)
    const num3 = yield fn(num2)
    return num3
}
function generatorToAsync(generator) {
    return function () {
        return new Promise((resolve, reject) => {
            const g = generator()
            const next1 = g.next()
            next1.value.then(res1 => {
                const next2 = g.next(res1)
                next2.value.then(res2 => {
                    const next3 = g.next(res2)
                    next3.value.then(res3 => {
                        resolve(g.next(res3).value)
                    })
                })
            })
        })
    }
}
//使用
const asyncFn = generatorToAsync(generator)
asyncFn().then(res => console.log(res))//8
//-------------改进，使得yield可以执行不定的次数 上面只能执行三次--------
function generatorToAsync2(generator) {
    return function() {
        const gen = generator.apply(this,arguments)
        return new Promise((resolve,reject)=>{
            function _next(key,arg) {
                let res
                try {
                    res = gen[key](arg)
                    const {value,done} = res
                    if(done) {
                        return resolve(value)
                    } else {
                        return Promise.resolve(value).then(val=>_next('next',val),error=>_next('throw',error))
                    }
                } catch(error) {
                    return reject(error)
                }
            }
            _next('next')
        })
    }
}
const asyncFn2 = generatorToAsync2(generator)
asyncFn2().then(res=>console.log(res))