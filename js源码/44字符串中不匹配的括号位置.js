/**
 * 力扣20 是字符串匹配判断
 * 输入：${{(3+5)*2+(5/(24)}
 * 输出：
 * {
 *   1: '{',    
 *   11: '(',    
 * }
 */
let str = '${{(3+5)*2+(5/(24)}'
const getUnmatchJson = function (s) {
    let stack = []
    const res = {}
    let map = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    let reg = /[^\{\[\(\)\]\}]/
    for (let i = 0, len = s.length; i < len; i++) {
        if (reg.test(s[i])) continue
        if(map[s[i]]) {
            stack.push({
                char:s[i],
                index:i
            })
        } else {
            //右括号
            if(stack.length===0) {
                //没有匹配的左括号
                res[i] = s[i]
                continue
            }
            let temp = stack.pop()
            if(s[i]!==map[temp.char]) {
                res[temp.index] = temp.char
                i--
            }
        }
    }
    //字符串匹配结束
    while(stack.length) {
        let temp = stack.pop()
        res[temp.index] = temp.char
    }
    return res
}
let str2 = '[a+b]/${dg'
console.log(getUnmatchJson(str))
console.log(getUnmatchJson(str2))
console.log(/[^\{\[\(\)\]\}]/.test(str[1]))