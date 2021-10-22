/**
 * .1 IP 地址 10.0.3.193
 * 每段拆分为一个二进制形式组合起来为 00001010 00000000 00000011 11000001 
 * 把二进制又转为十进制 167773121 
 * 2. 给一个167773121  能转换为IP地址10.0.3.193
 * https://mp.weixin.qq.com/s/UWCuEtNS2kuAuDY-eIbghg
 */
function ipToNum(ip) {
    let arr = ip.split('.')
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        num |= parseInt(arr[i]) << 8 * (3 - i)
    }
    console.log('num', num)
    return num>>>0 //>>>表示无符号位移
}
let ip = '10.0.3.193'
ipToNum(ip)
function numToIp(num) {
    //1. 右移动 & 255 
    let res = []
    res.unshift(num & 255)
    res.unshift((num >> 8) & 255)
    res.unshift((num >> 16) & 255)
    res.unshift((num >> 24) & 255)
    return res.join('.')
}
let num = 167773121
console.log(numToIp(num))