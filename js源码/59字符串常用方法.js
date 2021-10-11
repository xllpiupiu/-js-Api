/**
 * 1. 操作方法：增加 删除 修改 查
 */
/**
 * 2. 转换方法split
 */
/**
 * 3. 模板匹配方法 match search replace
 */
//match
let text = 'cat,bat,sta,fas'
let pattern = /.at/
let matches = text.match(pattern) 
console.log('matches: ', matches)
let pos = text.search(/at/)
console.log('pos: ', pos)
let res = text.replace('at','ond') 
console.log('res: ', res);
console.log('NaN===NaN',NaN===NaN)


