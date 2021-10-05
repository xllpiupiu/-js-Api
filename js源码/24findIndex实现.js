/**
 * O(n)遍历 找到出现的第一个位置
 * 二分查找O(logn)遍历
 */
//普通遍历
Array.prototype.findIndex = function (val) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === val) return i;
    }
    return -1;
}
//找到结束位置
Array.prototype.findEndIdx = function (val) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i] === val) return i;
    }
    return -1;
}
let arr = [1, 2, 2, 4];
let index = arr.findIndex(2);
console.log('index: ', index);
let endIdx = arr.findEndIdx(2);

console.log('endIdx: ', endIdx);

/**
 * 2. 优化算法使得时间复杂度为O(logn)
 * 使用二分查找因为数组有序
 */
Array.prototype.findStartIdx = function (val) {
    let left = 0;
    let right = this.length - 1;
    while(left<=right) {
        let midIdx = Math.floor(left+(right-left)/2);
        if(this[midIdx]===val&&this[midIdx-1]<val||midIdx===0){
            return midIdx;
        } else if(this[midIdx]>=val){
            //往左侧查找
            right = midIdx - 1;
        } else {
            left = midIdx + 1;
        }
    }
    return -1;
}
Array.prototype.findEndIdx2 = function(val) {
    let left = 0;
    let right = this.length - 1;
    while(left<=right) {
        let midIdx = Math.floor(left+(right-left)/2);
        if(this[midIdx]===val&&this[midIdx+1]>val||midIdx===this.length-1) {
            return midIdx;
        } else if(this[midIdx]<=val) {
            //往左侧查找
            left = midIdx + 1;
        } else {
            right = midIdx -1;
        }
    }
    return -1;
}
let startIdx = arr.findStartIdx(9);
console.log('startIdx: ', startIdx);

let findEndIdx2 = arr.findEndIdx2(4);
console.log('findEndIdx2: ', findEndIdx2);

