/**
 * 参考地址 https://github.com/sisterAn/JavaScript-Algorithms/issues/89
 * @param {*} str 
 * @returns 
 */
//1简单实现
function _parseInt(str) {
    let res = NaN
    for (let i = 0; i < str.length; i++) {
        const dec = str.charCodeAt(i)
        console.log('dec: ', dec);
        if (dec < 48 || dec > 57) break
        if (isNaN(res)) res = 0
        const val = dec - 48
        res = res * 10 + val
    }
    return res
}
console.log(_parseInt('12'))
//可以传两个参数  parsenInt('123',5)将'123'看作5进制 返回10进制
function _parseInt2(str, radix) {
    //1. 对入参做判断
    let strType = typeof str
    if (strType !== 'string' && strType !== 'number') return NaN
    if (typeof radix !== 'number' || radix < 2 || radix > 9) return NaN
    //2. 对str做处理 只取整数部分
    let strHandle = String(str).trim().split('.')[0]
    console.log('strHandle: ', strHandle);
    if (strHandle.length === 0) return NaN
    //3. radix处理
    if (!radix) radix = 10
    //4. 转换逻辑  将字符反转
    let strReverse = strHandle.split('').reverse().join('')
    console.log('strReverse: ', strReverse);
    let res = 0
    for (let i = 0, len = strReverse.length; i < len; i++) {
        if (strReverse[i] >= radix) return NaN
        res += strReverse[i] * Math.pow(radix, i)
    }
    return res
}
console.log(_parseInt2('123', 5))
