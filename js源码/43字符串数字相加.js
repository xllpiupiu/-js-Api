/**
 * 力扣415. 字符串数字相加
 * https://leetcode-cn.com/problems/add-strings/
 */
let str1 = '111'
let str2 = '2393'
const addStr = function (str1, str2) {
    let res = []
    let carry = 0
    for (let i = str1.length - 1, j = str2.length - 1; i >= 0 || j >= 0 || carry != 0; i--, j--) {
        let num1 = i < 0 ? 0 : str1[i] - '0'
        let num2 = j < 0 ? 0 : str2[j] - '0'
        let sum = (num1+num2+carry)%10
        res.unshift(sum)
        carry = Math.floor((num1+num2+carry)/10)
    }
    return res.join('')
}
console.log(addStr(str1,str2))