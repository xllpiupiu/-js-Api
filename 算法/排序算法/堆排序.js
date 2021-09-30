/**
 * 堆排序的时间复杂度：
 * 最好情况：
 * 最坏情况：
 * 平均时间复杂度:
 */
/**
 * 1. 使用插入建堆
 *
 */
// function insertBuildHeap(arr, val) {
//     arr.push(val);
//     let i = arr.length - 1;
//     while (i / 2 > 0 && arr[i] > arr[i / 2]) {
//         swap(arr, i, i / 2);
//         console.log('arr:', arr);
//         console.log('i:', i)
//     }
//     i = i / 2;
// }
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// insertBuildHeap([6, 8, 4, 1, 3, 2], 8);
/**
 * 2. 自下而上的建立大顶堆
 */
// const buildHeap = function (item, heapSize) {
//     while (heapSize < item.length - 1) {
//         heapSize++;
//         heapify(item, heapSize);
//     }
// }
// const heapify = function (item, i) {
//     while (Math.floor(i / 2) > 0 && item[i] < item[Math.floor(i / 2)]) {
//         swap(item, i, Math.floor(i / 2));
//         i = Math.floor(i / 2);
//     }
// }
// let arr = [, 5,2,3,4,1]
// buildHeap(arr, 1);
// console.log(arr);//[ <1 empty item>, 1, 2, 3, 5, 4 ]
/**
 * 3. 自上而下建立堆
 */
const buildHeap = function (heap, heapSize) {
    for (let i = Math.floor(heapSize / 2); i >= 1; i--) {
        heapify(heap, heapSize, i);
    }
}
const heapify = function (heap, heapSize, i) {
    while (true) {
        let maxIndex = i;
        if (2 * i <= heapSize && heap[i] > heap[2 * i]) {
            maxIndex = 2 * i;
        }
        if (2 * i + 1 <= heapSize && heap[maxIndex] > heap[2 * i + 1]) {
            maxIndex = 2 * i + 1;
        }
        if (maxIndex === i) {
            //没有交换直接break
            break;
        }
        swap(heap, i, maxIndex);
        i = maxIndex;
    }
}
let arr = [, 4, 5, 8, 1];
buildHeap(arr, arr.length - 1);
console.log(arr);