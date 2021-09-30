//17 电话号码字母组合
var letterCombinations = function (digits) {
    let res = [];
    let path = '';
    let map = new Map([
        ['1', '!@#'],
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz']
    ])
    const backTracking = function (pathLength) {
        if(pathLength===digits.length) {
            res.push(path);
            return ;
        }
        let digit = digits[pathLength];
        let s = map.get(digit);
        for(let i=0;i<s.length;i++){
            path+=s[i];
            backTracking(pathLength+1);
            path = path.slice(0,path.length-1);
        }
    }
    if(digits.length===0){
        return res;
    }
    backTracking(0);
    return res;
};