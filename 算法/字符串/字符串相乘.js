//链接力扣43 https://leetcode-cn.com/problems/multiply-strings/solution/you-hua-ban-shu-shi-da-bai-994-by-breezean/
/**
 * 1. 普通竖式相乘
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
var multiply = function (num1, num2) {
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
    if(num1==='0'||num2==='0') {
        return '0';
    }
    let multiplyRes = '0';
    for (let i = num2.length - 1; i >= 0; i--) {
        let carry = 0;
        let curRes = [];
        for (let j = 0; j < num2.length - 1 - i; j++) {
            curRes.unshift('0');
        }
        let num2Value = parseInt(num2[i]);
        for (let k = num1.length - 1; k >= 0 || carry != 0; k--) {
            let num1Value = k < 0? 0 : parseInt(num1[k]);
            let temp = (num1Value*num2Value+carry)%10;
            curRes.unshift(temp);
            carry = Math.floor((num1Value*num2Value+carry)/10);
        }
        console.log('curRes: ', curRes.join(''));
        multiplyRes = addString(multiplyRes,curRes.join(''));
    }
    console.log('multiplyRes: ', multiplyRes);
    return multiplyRes;
};
let res1='';
res1 = multiply('3333','4444');
console.log('res1: ', res1);
/**
 * 2. 优化后的竖式相乘
 */
 var multiply2 = function (num1, num2) {
    //优化的竖式乘法 
    if(num1==='0'||num2==='0') {
        return '0'
    }
    let res = [];
    for(let i = 0;i<num1.length+num2.length;i++) {
        res.push(0);
    }
    for (let i = num1.length - 1; i >= 0; i--) {
            let n1 = parseInt(num1[i]);
        for (let j = num2.length - 1; j >= 0; j--) {
            let n2 = parseInt(num2[j]);
            let temp = res[i+j+1] + n1*n2;
            res[i+j+1] = temp%10;
            res[i+j] += Math.floor(temp/10);
        }
    }
    if(res[0]===0) {
        res.splice(0,1);
    }
    return res.join('');
};

let res2 = '';
res2 = multiply2('3333','4444');
console.log('res2: ', res2);
