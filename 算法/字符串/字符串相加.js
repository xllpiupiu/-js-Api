
//链接力扣415 https://leetcode-cn.com/problems/multiply-strings/solution/you-hua-ban-shu-shi-da-bai-994-by-breezean/
const addString = function (num1Str, num2Str) {
    console.log('num1Str: ', num1Str);
    console.log('num2Str: ', num2Str);
    let addRes = [];
    let carry = 0;
    for (let num1Index = num1Str.length - 1, num2Index = num2Str.length - 1; num1Index >= 0 || num2Index >= 0 || carry != 0; num2Index--, num1Index--) {
        let num1 = num1Index < 0 ? 0 : parseInt(num1Str[num1Index]);
        let num2 = num2Index < 0 ? 0 : parseInt(num2Str[num2Index]);
        let curRes = (num1 + num2 + carry) % 10;
        addRes.unshift(curRes);
        carry = Math.floor((num1 + num2 + carry) / 10);
    }
    return addRes.join('');
}

let res = addString('233','9999');
console.log('res: ', res);