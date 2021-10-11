/**
 * 1. 扩展运算符和set结构相结合实现去重
 */
let str = 'acbcc'
let unique = [...new Set(str)].join('')
console.log('unique: ', unique);

/**
 * 2. 实现并集 交集 差集
 */
let arr1 = [1,2,3,3]
let arr2 = [2,3,4,5]
let arr11 = new Set(arr1)
let arr22 = new Set(arr2)
//并集
let union = new Set([...arr11,...arr22])
let res1 = Array.from(union)
console.log('res1: ', res1);
let intersect = new Set([...arr11].filter(x=>arr22.has(x)))
console.log('intersect: ', [...intersect]);
let difference = new Set([...arr1].filter(item=>!arr22.has(item)))
console.log('difference: ', [...difference]);
