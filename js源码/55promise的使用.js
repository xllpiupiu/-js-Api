/**
 * 1. promise实现图片加载
 */
const preloadImage = function (path) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = resolve
        image.onerror = reject
        image.src = path
    })
}
/**
 * 2. 下一个请求依赖上一个请求结果
 */
getInfo().then(res => {
    let { data1 } = res
    return data1
}).then(res => {
    const { data2 } = res
    return data2
}).then(res => {
    const { data3 } = res
    return data3
})
/**
 * 3. 多个请求合并到一起汇总所有请求设置一个Loading
 * 加载数据时间过长
 */
function initLoad() {
    loading.show()
    Promise.all([request1(), request2(), request3()]).then(res => {
        loading.hide()
    }).catch(err => {
        console.log(err)
        loading.hide()
    })
}
/**
 * 4. 设置请求超时
 */
function request() {
    const res = new Promise((resolve, reject) => {
        // const img = new Image()
        // img.onload = function () {
        //     resolve(img)
        // }
        // img.src = 'url'
        fetch('url',{其他参数})
    })
    return res
}
function timeOut(delayTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('请求超时')
        }, delayTime)
    })
}
Promise.race([request(), timeOut(5000)]).then(res => {
    resolve(res)
    console.log(res)
}).catch(err=>{
    console.log(err)
})