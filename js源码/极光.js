let str = '2200232021'
//输出 20,232,021
function addfn(str) {
    let arr = str.split('')
    let arrLength = arr.length
    let count = Math.floor(arrLength/3)
    let i = 0
    while(arrLength>3&&i++<count&&(arrLength-3*i>0)) {
        //向倒数第四位插入,
        arr.splice(arrLength-3*i,0,',')
    }
    return arr.join('')
}
console.log(addfn(str))
let line = '{{[()]}}'
function isValid(str) {
    const stack = []
       for(let item of str) {
           if(item==='{'){
            stack.push('}')
        } else if(item==='[') {
            stack.push(']')
        } else if(item==='(') {
            stack.push(')')
        } else if(stack.length===0||stack[stack.length-1]!==item) {
            return false
        } else {
            stack.pop()
        }
       }
    return stack.length===0
}
console.log(isValid(line))