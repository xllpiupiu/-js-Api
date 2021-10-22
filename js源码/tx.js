/**
 *  const testCase = [1,2,3];
 *   addOne(testCase) -> [1,2,4];￼
 */
function addOne(arr) {
    let res = []
    let carry = 0
    let arr1 = new Array(arr.length).fill(0)
    arr1[arr1.length - 1] = 1
    for (let length = arr.length, i = length - 1, j = length - 1; i >= 0 || j >= 0 || carry !== 0; i--, j--) {
        let num1 = i < 0 ? 0 : arr[i]
        let num2 = j < 0 ? 0 : arr1[j]
        let sum = (num1 + carry + num2) % 10
        res.unshift(sum)
        carry = Math.floor((num1 + carry + num2) / 10)
        console.log('carry: ', carry);
    }
    return res
}
/**
 * 上面方法空间复杂度O(n) 原地修改
 */
function addOne2(arr) {
    let i = arr.length - 1
    let carry = 0
    while (i >= 0 || carry !== 0) {
        let add = 0
        if (i === arr.length - 1) {
            add = 1
        }
        let num = i < 0 ? 0 : arr[i]
        const temp = (num + add + carry)
        const sum = temp % 10
        carry = Math.floor(temp / 10)
        if (i < 0) {
            arr.unshift(sum)
        } else {
            arr[i--] = sum
        }
    }
}
const testCase = [9, 9, 9];
console.log(addOne(testCase))
let arr3 = [1, 2, 2, 9]
addOne2(arr3)
console.log('arr2: ', arr3);

/**
 * forEach map 使用是否改变原数组？
 * 1. 数组元素是引用类型且在forEach map的时候改变了item.属性就会变 改变整个item不会改变
 * map 会返回一个新数组  forEach不会返回新数组
 */
const arr1 = [{ name: 'xlll', age: 23 }, { name: 'dzzz', age: 33 }]
const arr2 = [1, 2, 3]
arr1.forEach(item => {
    item.name = 'xxx'
})
console.log('arr1>>>', arr1)
const res2 = arr2.map(item => {
    return item * item
})
console.log('arr2>>>', arr2)
console.log('res2>>>', res2)