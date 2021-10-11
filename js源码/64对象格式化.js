/**
 * 1. 对象格式化
 */
let obj1 = {
    A: '1',
    B: '2',
    C: {
        D: {
            E: 'e',
            F: 'f'
        }
    }
}
// 修改为
let obj2 = {
    a: '1',
    b: '2',
    c: {
        d: {
            e: 'e',
            d: 'd'
        }
    }
}
function keysToLowCase(obj) {
    let reg = new RegExp('([A-Z]+)', 'g')
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let temp = obj[key]
            if (reg.test(key.toString())) {
                //大写
               temp = obj[key.replace(reg,(match,key,index,str)=>{
                    return key.toLowerCase()
                })] = obj[key] 
                delete obj[key]
            }
            if (temp && typeof temp === 'object') {
                keysToLowCase(temp)
            }
        }
    }
    return obj
}
console.log(keysToLowCase(obj1))