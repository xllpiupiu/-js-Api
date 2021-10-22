/**
 * 连续不连续最大升序数量
 * 连续可以使用双指针  
 * let arr = [101,19,12,34,51,32,7,103,8]
 */
//1. 连续升序最大数量
function findMaxAesc(arr) {
    if (arr.length === 0) return 0
    let res = 1
    let slow = 0
    for (let fast = 1, len = arr.length; fast < len; fast++) {
        if (arr[fast] < arr[fast - 1]) {
            slow = fast
        }
        res = Math.max(res, fast - slow + 1)
    }
    return res
}

function findMaxAesc3(arr) {
    if (arr.length <= 1) return arr.length
    let max = 1
    let count = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            count++
        } else {
            count = 1
        }
        max = Math.max(max, count)
    }
    return max
}
// let arr = [101,19,12,34,51,32,7,103,8,104,1,105,2,106]
let arr = [0, 1, 0, 3, 2,3]
// console.log(findMaxAesc(arr))
// console.log(findMaxAesc3(arr))
//不连续最大升序数量
function findMaxAesc2(arr) {
    if (arr.length === 0) return 0
    let res = 1
    for (let i = 0, leng = arr.length; i < leng; i++) {
        let slow = arr[i]
        let num = 1
        for (let j = i + 1; j < leng; j++) {
            if (arr[j] > slow) {
                slow = arr[j]
                num++
            }
        }
        res = Math.max(res, num)
    }
    return res
}


console.log(findMaxAesc2(arr))
