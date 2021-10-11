/**
 * 1. 原生对象没有提供遍历器 for...of...
 */
function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj)
    for(let propKey of propKeys) {
        yield [propKey,obj[propKey]]
    }
}
let obj = {
    name:'lis',
    age:'12',
    grad:'gg'
}
for(let [key,val] of objectEntries(obj)) {
    console.log('key>>>',key,'val>>>',val)
}
// key>>> name val>>> lis
// key>>> age val>>> 12
// key>>> grad val>>> gg

//2. async await 是generator 的语法糖
//用generator 实现一个async await