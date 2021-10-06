/**
 * 引用对象浅拷贝
 */
let x = [1,2,3]
let y = x
let z = [4,5,6]
y[0] = 10
y = z
z[1] = 20
x[2] = z = 30
console.log(x,y,z)

