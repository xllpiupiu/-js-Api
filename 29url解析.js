/**
 * url= url = 'http://sample.com/?a=1&b=2&c=xx&d=2#hash';
 */
//使用URL构造函数 使得url具有searchParams属性
const url = 'http://sample.com/?a=1&b=2&c=xx&d=2#hash';
function getUrlParams(url) {
    const urlParams = new URL(url)
    const params = urlParams.searchParams
    console.log('params: ', params);
    const obj = {}
    //使用forEach map只能循环数组吗？？？
    params.forEach((item,index)=>obj[index] = item)
    return obj
}
console.log(getUrlParams(url))
//使用普通的split map循环
function getUrlParams2(url) {
    const indexStart = url.indexOf('?')
    const indexEnd = url.indexOf('#')
    const params = url.slice(indexStart+1,indexEnd)
    let obj = {}
    params.split('&').map(item=>{
        const objParams = item.split('=')
        obj[objParams[0]] = objParams[1]
    })
    return obj
}
console.log(getUrlParams2(url))