/**
 * node中间件
 */
const middleware1 = (req, res, next) => {
    console.log('m1 run')
    return next().then(() => {
        console.log('m1 end')
    })
}
const middleware2 = async (req, res, next) => {
    console.log('m2 run')
    let result = await next()
    console.log('m2 end')
    return result
}
const middleware3 =async (req, res, next) => {
    console.log('m3 run')
    let result = await next()
    console.log('m3 end')
    return result
}
const middlewares = [middleware1, middleware2, middleware3]
function useApp(req, res) {
    const next = () => {
        const middleware = middlewares.shift()
        if (middleware) {
            //将返回值包装为Promise对象
            return Promise.resolve(middleware(req, res, next))
        } else {
            return Promise.resolve('end')
        }
    }
    next()
}
useApp()