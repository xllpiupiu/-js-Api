
/**
 * promise.all的实现
 */
 Promise.prototype.allFn = function (promises) {
    if (Array.isArray(promises)) {
        throw TypeError('params must Array')
    }
    let res = []
    let promiseCount = 0
    let promisesLength = promises.length
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promisesLength; i++) {
            Promise.resolve(promises[i]).then((val) => {
                promiseCount++
                res[i] = val
                if (promisesLength === promiseCount) {
                    resolve(res)
                }
            }, error => {
                reject(error)
            })
        }
    })
}
/**
 * promise.race实现
 */
Promise.prototype.raceFn = function (promises) {
    if (Array.isArray(promises)) {
        throw TypeError('input must Array')
    }
    return new Promise((resolve, reject) => {
        for (let promise of promises) {
            Promise.resolve(promise).then((data) => {
                resolve(data)
            }, (error) => {
                reject(error)
            })
        }
    })
}
/**
 * Promise.allSettled实现
 * https://www.kancloud.cn/wangjiachong/gongzuopian/1856425
 * https://zhuanlan.zhihu.com/p/374005591
 */
Promise.allSettledFn = function (promises) {
    return Promise.all(promises.map(item => Promise.resolve(item).then(value => ({ status: 'fulfilled', value }), reason => ({ status: 'rejected', reason }))))
}
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = new Promise((resolve,reject)=>{
    setTimeout(reject,1000,'three')
})
const promises = [p1,p2,p3]
// Promise.allSettledFn(promises).then(console.log)
/**
 * 不使用promise.all 
 */
Promise.allSettledFn2 = function(promises) {
    if(Array.isArray(promises)) {
        throw new TypeError('Input params must be Array')
    }
    let res = []
    let promiseCount = 0
    let promisesLength = promises.length
    return new Promise((resolve,reject)=>{
        for(let i = 0;i<promisesLength;i++) {
            Promise.resolve(promises[i]).then(val=>{
                res[i] = {
                    status:'fulfilled',
                    value:val
                }
            }).catch(err=>{
                res[i] = {
                    status: 'rejected',
                    reason: err
                }
            }).finally(()=>{
                promiseCount++
                if(promiseCount===promisesLength) {
                    resolve(res)
                }
            })
        }
    })
}
Promise.allSettledFn2(promises).then(res=>{
    console.log(res)
})