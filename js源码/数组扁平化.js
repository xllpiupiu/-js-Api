/**
 * 数组扁平化 
 * [1,2,[3,4]]====>[1,2,3,4]
 */
let arr = [1, 2, [3, 4]];
/**
 * 1. 方式一
 * 使用数组API reduce
 */
function flatteen(arr) {
    return arr.reduce((res, item) => {
        return res.concat(Array.isArray(item) ? flatteen(item) : item);
    }, [])
}
console.log(flatteen(arr));
/**
 * 2. 方式二
 * 使用数组API　toString&split 或者join&&split
 */
function flatteen2(arr) {
    return arr.toString().split(',').map(function (item) {
        return Number(item);
    })
}
console.log(arr.toString())//1,2,3,4
console.log(flatteen2(arr))
/**
 * 3. 方式三
 * 递归实现
 */
function flatteen3(arr) {
    let res = [];
    arr.map(item => {
        if (Array.isArray(item)) {
            res = res.concat(flatteen3(item));
        } else {
            res.push(item);
        }
    })
    return res;
}
console.log(flatteen3(arr));
/**
 * 4. 方式四
 * 使用扩展运算符
 */
let res = [].concat(...arr);
console.log(res);

function fun2(arr) {
    let newArr = [];
    function _flat(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                // newArr = newArr.concat(fun2(arr[i]))
                _flat(arr[i])
            } else {
                newArr.push(arr[i])
            }
        }
    }
    _flat(arr);
    return newArr;
}
console.log('func2',fun2(arr))

/**
 * 拍平到指定次数
 * @param {*} arr 
 * @param {*} n 
 * @returns 
 */
function flat2(arr, n) {
    let count = 0;
    let newArr = [];
    function _flat(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (count < n) {
                if (Array.isArray(arr[i])) {
                    count++;
                    _flat(arr[i])
                } else {
                    newArr.push(arr[i])
                }
            } else {
                console.log('ddd',arr[i])
                newArr.push(arr[i])
            }
        }
    }
    _flat(arr)
    return newArr;
}
console.log('flat>>>', flat2([1, 2, [3, [4], 5]], 0))