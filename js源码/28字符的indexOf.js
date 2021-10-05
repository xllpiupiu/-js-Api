let str = 'hello world ,I am ok';
/**
 * 正则方法实现
 * @param {*} searchStr 
 * @param {*} start 
 * @returns 
 */
String.prototype.myindexOf=function(searchStr, start=0){
    if (start < 0) start += this.length
    if (start >= this.length) return -1
    const reg = new RegExp(`${searchStr}`, 'ig')
    reg.lastIndex = start//确定匹配起始位置
    let res = reg.exec(this)
    return res ? res.index : -1
}
console.log(str.myindexOf('world',7))
/**
 * 2. 遍历字符串
 */
String.prototype._indexOf = function(searchStr,start=0) {
    if(start<0) start+=this.length
    if(start>this.length-1) return -1
    for(let i=start;i<this.length;i++) {
        if(this.slice(i,i+searchStr.length)===searchStr) return i
    }
    return -1
}
console.log(str._indexOf('I'))