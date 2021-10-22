const arr = [1, 2, 3, 6, 9, 20]
let num = 9
function insertNum(arr, num) {
    let insertIdx = 0
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] >= num) {
            insertIdx = i
            break;
        }
    }
    if (arr[0] >= num) {
        arr.unshift(num)
    } else if (insertIdx === 0) {
        arr.push(num)
    } else {
        console.log(insertIdx)
        arr.splice(insertIdx, 0, num)
    }
    return arr
}
// console.log(insertNum(arr,num))
//使用二分法
function insertNum(arr, num) {
    let left = 0, right = arr.length - 1
    let insertIdx = 0
    while (left < right) {
        let midIdx = Math.floor(left + (right - left) / 2)
        if(arr[midIdx]<=num&&arr[midIdx+1]>num) {
            insertIdx = midIdx + 1
            break;
        } else if(arr[midIdx]<num) {
            left = midIdx + 1
        } else if(arr[midIdx] > num) {
            right = midIdx
        }
     }
     console.log(insertIdx)
     if (arr[0] >= num) {
        arr.unshift(num)
    } else if (insertIdx === 0) {
        arr.push(num)
    } else {
        console.log(insertIdx)
        arr.splice(insertIdx, 0, num)
    }
    return arr
}
console.log(insertNum(arr,num))