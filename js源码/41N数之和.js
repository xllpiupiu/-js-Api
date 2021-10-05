/**
 * 1. 可以使用指针等方法实现 之前在看代码随想录的时候已经实现过
 * let arr = [1,4,7,11,9,8,10,6]
 * let N = 3;
 * let M = 27
 * 按照时间复杂度分析O(2^N*M)???
 */
function findSum(arr, count, sum) {
    const getCount = function (n) {
        let count = 0;
        while (n) {
            n &= (n - 1)
            count++
        }
        return count
    }
    let len = arr.length, bit = 1 << len
    console.log('bit: ', parseInt(bit).toString(2));//bit:  1 0000 0000
    let res = []
    for (let i = 1; i < bit; i++) {
        if (getCount(i) === count) {
            let s = 0, temp = []
            for (let j = 0; j < len; j++) {
                //判断下标i是否在对应的二进制位置上
                if (i & 1 << (len-1-j)) {
                    s += arr[j]
                    temp.push(arr[j])
                }
            }
            if (s === sum) {
                res.push(temp)
            }
        }
    }
    return res
}
let arr = [1, 4, 7, 11,9,8,10,6]
let N = 2;
let M = 5
console.log(findSum(arr, N, M))
let num = 1<<7
console.log(parseInt(num).toString(2))//10000000