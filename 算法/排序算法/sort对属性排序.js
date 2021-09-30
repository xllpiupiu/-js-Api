/**
 * 使用sort对属性排序
 */
const arr = [
    {
        name: 'xll',
        age: '23',
    },
    {
        name: 'hhh',
        age: '12',
    },
    {
        name: 'oi',
        age: '33',
    }
]
const compare = function (prop, ruleSort) {
    let ruleVal;
    if (ruleSort === 'desc') {
        //降序排列
        ruleVal = -1;
    } else if (ruleSort === 'asce') {
        //升序排列
        ruleVal = 1;
    }
    return function (a, b) {
        let val1 = a[prop];
        let val2 = b[prop];
        if (val1 < val2) return -1 * ruleVal;
        if (val1 > val2) return ruleVal;
        if(val1===val2) return 0;
    }
}
arr.sort(compare('age','asce'))

console.log('arr: ', arr);
const arr2 = [
    {name:'hell',age:'23'},
    {name:'wo',age:'33'},
    {name:'ddd',age:'11'},
]