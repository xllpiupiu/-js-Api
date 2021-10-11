/**
 * 1. typeof 
 */
typeof '1'
/**
 * 2. instanceof
 */
let arr = []
arr instanceof Array
/**
 * 3. Object.prototype.toString.call(obj)
 */
function getType(obj) {
    let type = typeof obj
    if(type!=='object') {
        return type
    }
    return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/,'$1')
}
console.log(getType([1,2]))